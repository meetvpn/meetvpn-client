import { IonContent, IonHeader, IonPage, IonButtons, IonBackButton, IonTitle, IonToolbar } from '@ionic/react';

import BackIcon from '../assets/icon/arrow-left.svg';

import './ServerDetail.css';

const ServerDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule" text={""} icon={BackIcon}>
            </IonBackButton>
          </IonButtons>
          <IonTitle>Detail Server</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default ServerDetail;
