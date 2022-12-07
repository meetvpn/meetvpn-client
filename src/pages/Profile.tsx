import React from "react";
import {
  IonBackButton,
  IonButton,
  IonIcon,
  IonButtons,
  IonLabel,
  IonText,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import UpgradeToProCard from "../components/UpgradeToProCard";

import BackIcon from "../assets/icon/arrow-left.svg";
import GoldCrown from "../assets/icon/gold-crown.svg";

import "./Profile.css";

// TODO This user should be get from AuthContext
const fakeUser = {
  accountNumber: "25628 710480 9849",
  email: "test@gmail.com",
  isProAccount: true,
}

const Profile: React.FC = () => {
  const {accountNumber, email, isProAccount} = fakeUser;

  return (
    <IonPage>
      <IonHeader className="home-header ion-no-border">
        <IonToolbar className="server-list-header ion-text-center">
          <IonButtons slot="start" className="back-btn-container">
            <IonBackButton
              defaultHref="/tabs/home"
              text={""}
              icon={BackIcon}
            ></IonBackButton>
          </IonButtons>
          <IonTitle color="dark" className="title">
            Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        <div className="profile-info-container">
          <div>
            <div>
              <div className="input-container">
                <IonLabel>Account Number</IonLabel>
                {isProAccount && <IonIcon src={GoldCrown}></IonIcon>}
              </div>
              <IonText color="dark">{accountNumber}</IonText>
            </div>

            <div>
              <IonLabel>Email</IonLabel>
              <IonText color="dark">{email}</IonText>
            </div>
          </div>

          <div>
            {isProAccount ? (
              <>
                <IonButton
                  color="danger"
                  expand="block"
                  fill="clear"
                  className="cancel-pro-btn"
                >
                  Cancel Pro Mode
                </IonButton>
                <IonText color="danger" className="cancel-pro-btn">
                  You will not able to access to All Servers after canceling pro
                  mode.
                </IonText>
                <IonButton color="danger" expand="block" className="logout">
                  Log Out
                </IonButton>
              </>
            ) : (
              <UpgradeToProCard />
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
