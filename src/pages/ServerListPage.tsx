import React, {useEffect, useState} from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon
} from '@ionic/react';

import UpgradeToProCard from '../components/UpgradeToProCard';
import ServerList from '../components/ServerList';
import {IServerInfoDetails} from "../interfaces";

import ArgentinaImg from '../assets/img/countries/argentina.svg';
import BelgiumFlag from '../assets/img/countries/belgium.svg';
import AlbaniaFlag from '../assets/img/countries/belgium.svg';
import Candle from "../assets/icon/candle.svg";

import './ServerListPage.css';

const serverList: IServerInfoDetails[] = [
  {name: 'Albania', ip: '24.12.001.124', premium: false, ms: '44 MS', photo: AlbaniaFlag},
  {name: 'Argentina', ip: '24.12.001.125', premium: false, ms: '44 MS', photo: ArgentinaImg},
  {name: 'Belgium', ip: '24.12.001.126', premium: true, ms: '44 MS', photo: BelgiumFlag},
  {name: 'Argentina', ip: '24.12.001.127', premium: true, ms: '44 MS', photo: ArgentinaImg},
  {name: 'Argentina', ip: '24.12.001.128', premium: true, ms: '44 MS', photo: ArgentinaImg},
  {name: 'Argentina', ip: '24.12.001.129', premium: true, ms: '44 MS', photo: ArgentinaImg},
]

const ServerListPage: React.FC = () => {
  const [servers, setServers] = useState<IServerInfoDetails[]>([])

  useEffect(() => {
    // Get all servers
    setTimeout(() => {
      setServers(serverList);
    }, 1000)
  }, []);


  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className='server-list-header'>
          <IonTitle color="dark" className="title">Discover server</IonTitle>

          <IonButtons slot="end">
            <IonButton color="light" className="header-icon">
              <IonIcon slot="icon-only" src={Candle} color="dark"/>
            </IonButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        <UpgradeToProCard/>

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

export default ServerListPage;
