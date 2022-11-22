import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonButton, IonGrid, IonRow, IonCol, IonText, IonButtons, IonTitle } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import SettingIcon from '../assets/icon/setting.svg';
import PowerIcon from '../assets/icon/power.svg';

// import MeetVPNImg from '../assets/img/MeetVPN.png';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='home-header'>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear">
              <IonIcon slot="icon-only" src={SettingIcon} color="f5f5"/>
            </IonButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        {/* <IonToolbar>
          <IonRow>
            <IonCol className='home-header-first-column'>
              <IonButton fill="clear">
                <IonIcon slot="icon-only" src={SettingIcon} />
              </IonButton>
            </IonCol>
            <IonCol size='auto'>
              <IonImg className='home-header-image' src={MeetVPNImg} />
            </IonCol>
            <IonCol />
          </IonRow>
        </IonToolbar> */}
      </IonHeader>
      <IonContent scrollY={false}>
        <IonGrid className='home-grid'>
          <IonRow className='home-grid-row'>
            <IonCol size='8' offset='2'>
              <IonText>Tap the button bellow to connect with the best server</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='home-grid-row'>
            <IonCol size='8' offset='2'>
              <IonButton className='home-power-button' size='large' fill="clear">
                <IonIcon className='home-power-icon' slot="icon-only" icon={PowerIcon} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='home-grid-row'>
            <IonCol size='8' offset='2'>
              <IonText>Not Connected</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block">Discover Server</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
