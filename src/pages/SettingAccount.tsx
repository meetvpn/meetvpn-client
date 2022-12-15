import React from "react";
import {
  IonLabel,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonInput,
  IonIcon,
  IonText,
} from "@ionic/react";

import DocumentCopyIcon from "../assets/icon/document-copy.svg";
import LeftArrowIcon from "../assets/icon/arrow-left.svg";

const SettingsAccount: React.FC = () => {
  const handleSave = () => {
    console.log("Saving settings...");
  };

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className="server-list-header ion-text-center">
          <IonText color="dark" className="title">
            Setting Account
          </IonText>
          <IonButtons slot="start">
            <IonBackButton icon={LeftArrowIcon} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        <div className="screen-content">
          <form noValidate onSubmit={handleSave}>
            <IonLabel color="dark" className="subtitle">
              Key
            </IonLabel>

            <div className="input-group">
              <IonInput value="2568" disabled={true} />
              <IonButton
                fill="clear"
                color="medium"
                onClick={() => console.log("Copy to clipboard")}
              >
                Copy Key
                <IonIcon slot="end" src={DocumentCopyIcon} />
              </IonButton>
            </div>

            <div className="divider" />

            <div>
              <IonLabel color="dark" className="subtitle">
                Email
              </IonLabel>
              <IonInput className="custom" type="email" placeholder="Email" />
            </div>

            <IonButton
              type="submit"
              expand="block"
              color="success"
              className="margin-top-30"
            >
              Save
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SettingsAccount;
