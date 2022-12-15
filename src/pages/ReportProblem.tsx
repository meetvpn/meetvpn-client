import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonText,
  IonToolbar,
  IonTextarea,
} from "@ionic/react";

import LeftArrowIcon from "../assets/icon/arrow-left.svg";

import "./ReportProblem.css";

const ReportProblem: React.FC = () => {
  const handleSubmit = () => {
    console.log("Sending the problems...");
  };

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className="server-list-header ion-text-center">
          <IonButtons slot="start">
            <IonBackButton icon={LeftArrowIcon} />
          </IonButtons>
          <IonText color="dark" className="title">
            Report a problem
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        <div className="screen-content">
          <form noValidate onSubmit={handleSubmit}>
            <IonLabel color="dark" className="subtitle">
              Title
            </IonLabel>

            <div className="input-group">
              <IonInput
                className="custom-input"
                placeholder="Title of problem"
              />
            </div>

            <div className="divider" />

            <div>
              <IonLabel color="dark" className="subtitle">
                Description
              </IonLabel>
              <IonTextarea
                placeholder="Description of problem"
                className="custom-textarea"
                autoGrow={true}
              />
            </div>

            <IonButton
              type="submit"
              expand="block"
              color="success"
              className="margin-top-30"
            >
              Submit
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReportProblem;
