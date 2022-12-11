import React from "react";
import {IonContent, IonPage, IonImg, IonText} from "@ionic/react";

import MeetVPNIco from "../assets/img/MeetVPN.png";

import './SplashPage.css'

const SplashPage: React.FC = () => (
  <IonPage>
    <IonContent fullscreen>
      <div className="splash-container">
        <IonImg src={MeetVPNIco}/>
      </div>
    </IonContent>
  </IonPage>
)

export default SplashPage;