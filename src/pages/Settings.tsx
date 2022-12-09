import React from 'react'
import {IonItem, IonText, IonLabel, IonList, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useAuth} from "../AuthProvider";
import './Settings.css';

const Settings: React.FC = () => {

  const {signout} = useAuth();

  const handleSave = ()=> {
    console.log('Saving settings...')
  }

  const cbLogout = () => console.log('Callback after logout');

  return <IonPage>
    <IonHeader className="home-header ion-no-border">
      <IonToolbar className="server-list-header">
        <IonTitle color="dark" className="title">
          Settings
        </IonTitle>

        <IonButtons slot="end">
          <IonButton fill="clear" color="dark" className="btn-done" onClick={handleSave}>
            Done
          </IonButton>
        </IonButtons>

      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="server-list-page">
      <div className='screen-content'>

        <IonList className="settings-container">
          <IonItem button lines="none" color="light">
            <IonLabel color="dark">Account</IonLabel>
          </IonItem>
          <IonItem button color="light" lines="none">
            <IonLabel color="dark">Preferences</IonLabel>
          </IonItem>
          <IonItem button color="light" lines="none">
            <IonLabel color="dark">Wire Guard Key</IonLabel>
          </IonItem>
          <IonItem color="light" lines="none">
            <IonLabel color="dark">App Version</IonLabel>
            <IonText>2022.2</IonText>
          </IonItem>
          <div className="divider" />
          <IonItem button color="light" lines="none">
            <IonLabel color="dark">Report a problem</IonLabel>
          </IonItem>
          <div className="divider" />
          <IonItem button color="light" lines="none">
            <IonLabel color="dark" >FAQ & Guides</IonLabel>
          </IonItem>
        </IonList>

        <IonButton color="danger" expand="block" className="logout" onClick={() => signout(cbLogout)}>
          Log Out
        </IonButton>
      </div>
    </IonContent>

  </IonPage>
}

export default Settings;