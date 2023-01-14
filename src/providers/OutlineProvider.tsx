import { isPlatform } from "@ionic/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Preferences } from "@capacitor/preferences";
import { StatusBar } from "@capacitor/status-bar";
import { SHADOWSOCKS_URI } from "ShadowsocksConfig";

interface IGateway {
  url: string;
  key: string;
  post_key: string;
}

const gateway: IGateway = JSON.parse(
  atob(process.env.REACT_APP_GETAWAY_BASE64 || "")
);

export enum OutlineStatus {
  loading,
  connected,
  disconnected,
  reconnecting,
  connecting,
  disconnecting,
}

interface IOutline {
  connect: () => Promise<any>;
  connectToKey: (key: string) => Promise<any>;
  disconnect: () => Promise<any>;
  status: OutlineStatus;
}
const OutlineContext = createContext<IOutline>({} as IOutline);

export const useOutline = () => useContext(OutlineContext);

export const OutlineProvider = ({ children }: { children: ReactNode }) => {
  const isEnabled = isPlatform("hybrid");
  const [status, setStatus] = useState(OutlineStatus.disconnected);

  const Tunnel = isEnabled
    ? // @ts-ignore
      new window.cordova.plugins.outline.Tunnel()
    : null;

  const getConfig = (key: string) => {
    const config = SHADOWSOCKS_URI.parse(key);
    return {
      host: config.host.data,
      port: config.port.data,
      method: config.method.data,
      password: config.password.data,
      name: config.tag.data,
    };
  };

  const connectToKey = async (key: string) => {
    // Emulate the connected status if is running in the browser
    if (!isEnabled) {
      return "OK";
    }
    try {
      const config = getConfig(key);
      const result = await Tunnel.start(config);
      console.log("Outline Start", result);
      return result;
    } catch {
      return "FAIL";
    }
  };

  const getKeysFromGateway = async () => {
    try {
      const headers = {
        "X-Api-Key": gateway.key,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const response = await fetch(gateway.url, {
        method: "POST",
        headers,
        redirect: "follow",
        body: JSON.stringify({ key: gateway.post_key }),
      });
      const data = await response.json();
      return data.keys;
    } catch {
      return;
    }
  };

  const getKeysFromStorage = async () => {
    try {
      const { value } = await Preferences.get({ key: "keys" });
      if (!value) {
        return;
      }
      return JSON.parse(value).keys;
    } catch {
      return;
    }
  };

  const connect = async () => {
    setStatus(OutlineStatus.connecting);
    try {
      // Check storage keys
      const storageKeys = await getKeysFromStorage();
      if (storageKeys) {
        for (let key of storageKeys) {
          const result = await connectToKey(key);
          if (result === "OK") {
            setStatus(OutlineStatus.connected);
            return;
          }
        }
      }
      // Check gateway keys
      const gatewayKeys = await getKeysFromGateway();
      if (gatewayKeys) {
        await Preferences.set({
          key: "keys",
          value: JSON.stringify({ keys: gatewayKeys }),
        });
        for (let key of gatewayKeys) {
          const result = await connectToKey(key);
          if (result === "OK") {
            setStatus(OutlineStatus.connected);
            return;
          }
        }
      }
      // Fallback
      setStatus(OutlineStatus.disconnected);
    } catch (e) {
      console.log(e);
      setStatus(OutlineStatus.disconnected);
    }
  };

  const disconnect = async () => {
    setStatus(OutlineStatus.disconnecting);
    // Emulate the disconnected status if is running in the browser
    if (!isEnabled) {
      return setStatus(OutlineStatus.disconnected);
    }
    const result = await Tunnel.stop();
    console.log("Outline Stop", result);
    // Adding delay after disconnect to improve the UX
    setTimeout(() => {
      setStatus(
        result !== "OK" ? OutlineStatus.connected : OutlineStatus.disconnected
      );
    }, 1000);
  };

  const checkAndUpdateRunningStatus = async () => {
    setStatus(OutlineStatus.connecting);
    const result = await Tunnel.isRunning();
    console.log("Outline isRunning", result);
    setStatus(result ? OutlineStatus.connected : OutlineStatus.disconnected);
  };

  useEffect(() => {
    if (isEnabled) {
      StatusBar.setBackgroundColor({
        color: status === OutlineStatus.connected ? "#3880ff" : "#999999",
      });
    }
  }, [isEnabled, status]);

  useEffect(() => {
    if (isEnabled) {
      checkAndUpdateRunningStatus();
      Tunnel.onStatusChange((nativeStatus: number) => {
        console.log("Outline Status", nativeStatus);
        //   switch (nativeStatus) {
        //     case 0:
        //       setStatus(OutlineStatus.connected);
        //       break;
        //     case 1:
        //       setStatus(OutlineStatus.disconnected);
        //       break;
        //     case 2:
        //       setStatus(OutlineStatus.reconnecting);
        //       break;
        //   }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    connect,
    connectToKey,
    disconnect,
    status,
  };
  return (
    <OutlineContext.Provider value={value}>{children}</OutlineContext.Provider>
  );
};