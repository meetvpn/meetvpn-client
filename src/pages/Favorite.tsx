import { IonContent, IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ServerList from "../components/ServerList";
import React, {useEffect, useState} from "react";
import {IServerInfoDetails} from "../interfaces";

import AlbaniaFlag from "../assets/img/countries/belgium.svg";
import ArgentinaImg from "../assets/img/countries/argentina.svg";
import BelgiumFlag from "../assets/img/countries/belgium.svg";
import BackIcon from '../assets/icon/arrow-left.svg';

import './Favorite.css';

const serverList: IServerInfoDetails[] = [
  {name: 'Albania', ip: '24.12.001.124', premium: false, ms: '44 MS', photo: AlbaniaFlag},
  {name: 'Argentina', ip: '24.12.001.125', premium: false, ms: '44 MS', photo: ArgentinaImg},
  {name: 'Belgium', ip: '24.12.001.126', premium: true, ms: '44 MS', photo: BelgiumFlag},
  {name: 'Argentina', ip: '24.12.001.127', premium: true, ms: '44 MS', photo: ArgentinaImg},
]

const Favorite: React.FC = () => {
  const [servers, setServers] = useState<IServerInfoDetails[]>([])

  useEffect(() => {
    // Get all servers
    setTimeout(() => {
      setServers(serverList);
    }, 500)
  }, []);

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className="server-list-header ion-text-center">
          <IonButtons slot="start" className="back-btn-container" style={{width: '24px'}}>
            <IonBackButton defaultHref="/tabs/home" text={""} icon={BackIcon}></IonBackButton>
          </IonButtons>
          <IonTitle color="dark" className="title">Favorite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        <ServerList
          title='Free Servers'
          servers={servers.filter(server => !server.premium)}
        />

        <ServerList
          title='Premium Servers'
          servers={servers.filter(server => server.premium)}
          premiumServers={true}
        />
      </IonContent>
    </IonPage>
  );
};

export default Favorite;
