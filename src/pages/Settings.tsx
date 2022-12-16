import React from "react";
import {
  IonItem,
  IonText,
  IonLabel,
  IonList,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonRouterLink,
} from "@ionic/react";
import { useAuth } from "../AuthProvider";
import RedirectIcon from '../assets/icon/redirect.svg';
import ArrowIcon from '../assets/icon/arrow-right.svg';

import "./Settings.css";

const Settings: React.FC = () => {
  const { signout } = useAuth();

  const handleSave = () => {
    console.log("Saving settings...");
  };

  const cbLogout = () => console.log("Callback after logout");

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className="server-list-header">
          <IonText color="dark" className="title" slot="start">
            Settings
          </IonText>

          <IonButtons slot="end">
            <IonButton
              fill="clear"
              color="dark"
              className="btn-done"
              onClick={handleSave}
            >
              Done
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        <div className="screen-content">
          <IonList className="settings-container">
            <IonRouterLink routerLink="/tabs/settings/account">
              <IonItem button lines="none" color="light" detail={true} detailIcon={ArrowIcon}>
                <IonLabel color="dark">Account</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonItem color="light" lines="none">
              <IonLabel color="dark">App Version</IonLabel>
              <IonText>2022.2</IonText>
            </IonItem>
            <div className="divider" />
            <IonRouterLink routerLink="/tabs/settings/report-problem">
              <IonItem button color="light" lines="none" detail={true} detailIcon={ArrowIcon}>
                <IonLabel color="dark">Report a problem</IonLabel>
              </IonItem>
            </IonRouterLink>
            <div className="divider" />
            <IonRouterLink routerLink="/tabs/settings/faq">
              <IonItem button color="light" lines="none" detail={true} detailIcon={RedirectIcon}>
                <IonLabel color="dark">FAQ & Guides</IonLabel>
              </IonItem>
            </IonRouterLink>
          </IonList>

          <IonButton
            color="danger"
            expand="block"
            className="logout"
            onClick={() => signout(cbLogout)}
          >
            Log Out
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
