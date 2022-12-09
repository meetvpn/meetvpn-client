import React from "react";

import { IonItem, IonText, IonIcon } from "@ionic/react";

import UploadIcon from "../assets/icon/upload.svg";
import DownloadIcon from "../assets/icon/download.svg";

import "./ItemServerInfoParam.css";

interface Props {
  title: string;
  icon: string;
  amount: string;
  measureType: string;
}

const ItemServerInfoParam: React.FC<Props> = ({
  title,
  icon,
  amount,
  measureType,
}) => {
  return (
    <IonItem color="light" lines="none" className="item-container">
      <IonIcon src={icon}></IonIcon>
      <div className="info">
        <IonText color="dark" className="card-subtitle">
          {title}
        </IonText>
        <IonText color="dark" className="transfer-value">
          <p>
            {amount} <span>{measureType}</span>
          </p>
        </IonText>
      </div>
    </IonItem>
  );
};

export default ItemServerInfoParam;
