import { IonContent, IonHeader, IonPage, IonButtons, IonBackButton, IonTitle, IonToolbar } from '@ionic/react';

import UpgradeToProCard from '../components/UpgradeToProCard';
import ServerList from '../components/ServerList';

import BackIcon from '../assets/icon/arrow-left.svg';

import './ServerListPage.css';

const ServerListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/home" text={""} icon={BackIcon}>
            </IonBackButton>
          </IonButtons>
          <IonTitle>Server List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <UpgradeToProCard />

        <ServerList title='Free Servers' />

        <ServerList title='Premiun Servers' />

      </IonContent>
    </IonPage>
  );
};

export default ServerListPage;
