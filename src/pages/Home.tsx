import React, { useMemo, useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
  IonText,
  IonButtons,
  IonImg,
} from "@ionic/react";

import { OutlineStatus, useOutline } from "../providers/OutlineProvider";

import { IServerInfoDetails, IMessages } from "../interfaces";
import ServerInfoCard from "../components/ServerInfoCard";
import ServerNetworkInfo from "../components/ServerNetworkInfo";
import { useConnectionCounter } from "../hooks/useConnectionCounter";

import SettingsIcon from "../assets/icon/settings.svg";
import Options from "../assets/icon/more.svg";
import MeetVPNIco from "../assets/icon/meet-vpn.svg";
import ArgentinaFlag from "../assets/img/countries/argentina.svg";

import "./Home.css";

const Home: React.FC = () => {
  const { status, connect, disconnect } = useOutline();
  const { hours, minutes, seconds } = useConnectionCounter();

  // const [{ name, ip, premium, ms }] = useState<IServerInfoDetails>({
  //   name: "Argentina",
  //   ip: "24.12.001.124",
  //   premium: true,
  // });

  const { headerTitle, footerText } = useMemo((): IMessages => {
    switch (status) {
      case OutlineStatus.disconnecting:
        return { headerTitle: "Disconnecting", footerText: "Disconnecting" };

      case OutlineStatus.connected:
        return { headerTitle: "Connecting Time", footerText: "Connected" };

      case OutlineStatus.connecting:
      case OutlineStatus.reconnecting:
        return { headerTitle: "Connecting Time", footerText: "Connecting" };

      default:
        return {
          headerTitle: "Tap the button bellow to connect",
          footerText: "Not Connected",
        };
    }
  }, [status]);

  const isConnecting =
    status === OutlineStatus.connecting ||
    status === OutlineStatus.reconnecting;
  const isDisconnected = status === OutlineStatus.disconnected;
  const isDisconnecting = status === OutlineStatus.disconnecting;
  const isConnected = status === OutlineStatus.connected;

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border" translucent={true}>
        <IonToolbar className="header-container">
          <IonButtons slot="start">
            <IonButton
              routerLink="/tabs/settings"
              color="light"
              className="header-icon"
            >
              <IonIcon slot="icon-only" src={SettingsIcon} color="dark" />
            </IonButton>
          </IonButtons>

          <IonImg src={MeetVPNIco} />

          <IonButtons slot="end">
            <IonButton color="light" className="header-icon">
              <IonIcon slot="icon-only" src={Options} color="dark" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-container" scrollY={false}>
        <div className="home-content">
          <div className="ion-text-center">
            <IonText
              color="dark"
              className={`${isDisconnected ? "subtitle" : "interval-title"}`}
            >
              {headerTitle}
            </IonText>
            <IonText
              color="success"
              className={`interval-time transition-height ${
                (isConnecting || isConnected) && "open"
              }`}
            >
              <span className="times">{hours}</span>
              <span>:</span>
              <span className="times">{minutes}</span>
              <span>:</span>
              <span className="times">{seconds}</span>
            </IonText>
          </div>

          <div
            className={`connection-info-content transition-height ${
              (isConnecting || isConnected) && "open"
            }`}
          >
            <ServerNetworkInfo transferType="Upload" amount="12.99" />
            <ServerNetworkInfo transferType="Download" amount="12.99" />
            {/* <ServerInfoCard
              name={name}
              ip={ip}
              premium={premium}
              ms={ms}
              photo={ArgentinaFlag}
            /> */}
          </div>

          <div className="btn-connect-container">
            <IonButton
              className="home-power-button"
              size="large"
              fill="clear"
              onClick={isConnected ? disconnect : connect}
            >
              <svg
                className={`
                  btn-switch 
                  ${(isConnecting || isDisconnecting) && "connecting"} 
                  ${isConnected && "connected"}`}
                width="136"
                height="136"
                viewBox="0 0 136 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="136" height="136" rx="68" fill="#EDF7FF" />
                <circle cx="68" cy="68" r="36" fill="#5DB8FA" />
                <path
                  d="M82.5385 69.2308C82.5385 71.2308 82.1474 73.141 81.3654 74.9615C80.5833 76.7821 79.5321 78.3526 78.2115 79.6731C76.891 80.9936 75.3205 82.0449 73.5 82.8269C71.6795 83.609 69.7692 84 67.7692 84C65.7692 84 63.859 83.609 62.0385 82.8269C60.2179 82.0449 58.6474 80.9936 57.3269 79.6731C56.0064 78.3526 54.9551 76.7821 54.1731 74.9615C53.391 73.141 53 71.2308 53 69.2308C53 66.8974 53.516 64.6987 54.5481 62.6346C55.5801 60.5705 57.0321 58.8397 58.9038 57.4423C59.4551 57.0321 60.0673 56.8718 60.7404 56.9615C61.4135 57.0513 61.9487 57.3718 62.3462 57.9231C62.7564 58.4615 62.9135 59.0673 62.8173 59.7404C62.7212 60.4135 62.4038 60.9551 61.8654 61.3654C60.609 62.3141 59.6378 63.4744 58.9519 64.8462C58.266 66.2179 57.9231 67.6795 57.9231 69.2308C57.9231 70.5641 58.1827 71.8365 58.7019 73.0481C59.2212 74.2596 59.9231 75.3077 60.8077 76.1923C61.6923 77.0769 62.7404 77.7788 63.9519 78.2981C65.1635 78.8173 66.4359 79.0769 67.7692 79.0769C69.1026 79.0769 70.375 78.8173 71.5865 78.2981C72.7981 77.7788 73.8462 77.0769 74.7308 76.1923C75.6154 75.3077 76.3173 74.2596 76.8365 73.0481C77.3558 71.8365 77.6154 70.5641 77.6154 69.2308C77.6154 67.6795 77.2724 66.2179 76.5865 64.8462C75.9006 63.4744 74.9295 62.3141 73.6731 61.3654C73.1346 60.9551 72.8173 60.4135 72.7212 59.7404C72.625 59.0673 72.7821 58.4615 73.1923 57.9231C73.5897 57.3718 74.1282 57.0513 74.8077 56.9615C75.4872 56.8718 76.0962 57.0321 76.6346 57.4423C78.5064 58.8397 79.9583 60.5705 80.9904 62.6346C82.0224 64.6987 82.5385 66.8974 82.5385 69.2308ZM70.2308 54.4615V66.7692C70.2308 67.4359 69.9872 68.0128 69.5 68.5C69.0128 68.9872 68.4359 69.2308 67.7692 69.2308C67.1026 69.2308 66.5256 68.9872 66.0385 68.5C65.5513 68.0128 65.3077 67.4359 65.3077 66.7692V54.4615C65.3077 53.7949 65.5513 53.2179 66.0385 52.7308C66.5256 52.2436 67.1026 52 67.7692 52C68.4359 52 69.0128 52.2436 69.5 52.7308C69.9872 53.2179 70.2308 53.7949 70.2308 54.4615Z"
                  fill="white"
                />
              </svg>
            </IonButton>
            <IonText className="text-button">{footerText}</IonText>
          </div>

          <IonButton
            routerLink="/tabs/servers"
            expand="block"
            color="success"
            className={`btn-expand transition-height ${
              isDisconnected && "open"
            }`}
          >
            Discover Server
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
