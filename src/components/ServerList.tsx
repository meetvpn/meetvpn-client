import React, { useState, useRef, useEffect } from "react";
import {
  IonList,
  IonText,
  IonButton,
  IonButtons,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from "@ionic/react";
import { ServerListProps } from "../interfaces";

import ServerInfoCard from "./ServerInfoCard";
import ServerItem from "./ServerItem";

import "./ServerList.css";

const ServerList: React.FC<ServerListProps> = ({
  title,
  servers,
  premiumServers = false,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }
  return (
    <>
      <IonList className="server-list-container">
        {/* <IonText color="dark">
          {title}
          {premiumServers ? (
            <IonButton fill="clear" color="warning">
              Go premium
            </IonButton>
          ) : (
            <IonButton id="open-modal" fill="clear" color="dark">
              View all
            </IonButton>
          )}
        </IonText> */}

        <div className="server-list">
          {servers.map((server, index) => (
            <ServerItem key={index} {...server} />
          ))}
        </div>
      </IonList>
      <IonModal
        ref={modal}
        trigger="open-modal"
        presentingElement={presentingElement!}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList className="server-list-container">
            <IonText color="dark">
              {title}
              {premiumServers ? (
                <IonButton fill="clear" color="warning">
                  Go premium
                </IonButton>
              ) : (
                <IonButton id="open-modal" fill="clear" color="dark">
                  View all
                </IonButton>
              )}
            </IonText>

            <div className="server-list">
              {servers.map((server, index) => (
                <ServerInfoCard key={index} {...server} />
              ))}
            </div>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default ServerList;
