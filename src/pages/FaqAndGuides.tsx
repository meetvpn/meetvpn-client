import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar} from "@ionic/react";
import LeftArrowIcon from "../assets/icon/arrow-left.svg";
import React from "react";

const FaqAndGuides = () => {
  return <IonPage>
    <IonHeader className="home-header ion-no-border">
      <IonToolbar className="server-list-header">
        <IonButtons slot="start">
          <IonBackButton icon={LeftArrowIcon} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="server-list-page">
      preguntas frecuentes
    </IonContent>
  </IonPage>
}

export default FaqAndGuides