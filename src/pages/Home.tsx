import React, {useState} from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
  IonText,
  IonButtons,
  IonImg
} from '@ionic/react';

import SettingsIcon from '../assets/icon/settings.svg';
import Options from '../assets/icon/more.svg'
import PowerIcon from '../assets/icon/power.svg';

import MeetVPNIco from "../assets/icon/meet-vpn.svg";

import './Home.css';

type connectionStatus = 'connected' | 'disconnected' | 'connecting';

const Home: React.FC = () => {
  const status = useState<connectionStatus>('disconnected');

  const handleConnect = ()=> {
    console.log('Todo connection...');
    // TODO: Change the status of connection to connecting, call the server and when i have response of server success change the status to connected.
  }

  return (
    <IonPage>
      <IonHeader className='home-header ion-no-border'>
        <IonToolbar className="header-container">

          <IonButtons slot="start">
            <IonButton color="light" className='header-icon'>
              <IonIcon slot="icon-only" src={SettingsIcon} color="dark"/>
            </IonButton>
          </IonButtons>

          <IonImg src={MeetVPNIco} />

          <IonButtons slot="end">
            <IonButton color="light" className='header-icon'>
              <IonIcon slot="icon-only" src={Options} color="dark"/>
            </IonButton>
          </IonButtons>

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

      <IonContent className="home-container" scrollY={false}>
        <div className='home-content'>

          <IonText color='dark' className="subtitle">Tap the button bellow to connect</IonText>

          <div className='btn-connect-container' >
            <IonButton className='home-power-button' size='large' fill="clear" onClick={handleConnect}>
              <IonIcon className='home-power-icon' slot="icon-only" icon={PowerIcon} />
            </IonButton>
            <IonText className="text-button">Not Connected</IonText>
          </div>

          <IonButton expand="block" color="success" className="btn-expand" >Discover Server</IonButton>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
