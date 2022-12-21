import React, { useState } from "react";

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

import { IServerInfoDetails } from "../interfaces";
import ServerInfoCard from "../components/ServerInfoCard";
import ServerNetworkInfo from "../components/ServerNetworkInfo";

import SettingsIcon from "../assets/icon/settings.svg";
import Options from "../assets/icon/more.svg";
import PowerIcon from "../assets/icon/power.svg";
import ConnectingIcon from "../assets/icon/connecting.svg";
import ConnectedIcon from "../assets/icon/connected.svg";
import MeetVPNIco from "../assets/icon/meet-vpn.svg";
import ArgentinaFlag from '../assets/img/countries/argentina.svg';

import "./Home.css";


const fakeRequest = (): Promise<IServerInfoDetails> =>
  Promise.resolve({
    name: "Argentina",
    ip: "24.12.0001.124",
    premium: true,
  });

const Home: React.FC = () => {
  const { status, connect, disconnect } = useOutline();

  // const [status, setStatus] = useState<connectionStatus>("disconnected");
  const [{ name, ip, premium, ms }, setRegion] = useState<IServerInfoDetails>({
    name: "Argentina",
    ip: "24.12.001.124",
    premium: true,
  });

  // const handleConnect = () => {
  //   setStatus("connecting");

  //   setTimeout(async () => {
  //     console.log("Connecting server...");
  //     const response = await fakeRequest();
  //     setRegion(response);
  //     setStatus("connected");
  //   }, 1000);
  // };

  // const handleDisconnect = () => {
  //   console.log("Disconnecting server...");
  //   setStatus("disconnected");
  // };

  // const connected = status === "connected";

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className="header-container">
          <IonButtons slot="start">
            <IonButton routerLink="/tabs/settings" color="light" className="header-icon">
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
        {status === OutlineStatus.disconnected  && (
          <div className="home-content">
            <IonText color="dark" className="subtitle">
              Tap the button bellow to connect
            </IonText>

            <div className="btn-connect-container">
              <IonButton className="home-power-button" size="large" fill="clear" onClick={connect}>
                <IonIcon className="home-power-icon" slot="icon-only" icon={PowerIcon}/>
              </IonButton>
              <IonText className="text-button">Not Connected</IonText>
            </div>

            <IonButton routerLink="/tabs/settings" expand="block" color="success" className="btn-expand">
              Discover Server
            </IonButton>
          </div>
        )}

        {(status === OutlineStatus.connected || status === OutlineStatus.loading ) && (
          <div className="home-connecting-container">
            <div className="ion-text-center">
              <IonText color="dark" className="interval-title">
                {status === OutlineStatus.connected ? "Connecting Time" : "Connecting"}
              </IonText>
              <IonText color="success" className="interval-time">
                00:00:00
              </IonText>
            </div>

            <div className="connection-info-content">
              <ServerNetworkInfo transferType="Upload" amount="12.99" />
              <ServerNetworkInfo transferType="Download" amount="12.99" />
              <ServerInfoCard name={name} ip={ip} premium={premium} ms={ms} photo={ArgentinaFlag} />
            </div>

            <div className="btn-connecting-container">
              <div className="btn-connect-container">
                <IonButton
                    className="home-power-button"
                    size="large"
                    fill="clear"
                    onClick={status === OutlineStatus.connected ? disconnect : connect}
                >
                  <IonIcon className="home-power-icon" slot="icon-only" icon={status === OutlineStatus.connected ? ConnectedIcon : ConnectingIcon}/>
                </IonButton>
                <IonText className="text-button">
                  {status === OutlineStatus.connected ? "Connected" : "Connecting"}
                </IonText>
              </div>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
