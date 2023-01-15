import React from "react";
import {
  IonIcon,
  IonText,
  IonThumbnail,
  // IonImg
} from "@ionic/react";
// import { IServerInfoDetails } from "../interfaces";

// import CrowIcon from "../assets/icon/crown.svg";
// import CrowBoldIcon from "../assets/icon/bold-crown.svg";
import ChartBoldIcon from "../assets/icon/bold-chart.svg";

import "./ServerInfoCard.css";

const ServerInfoCard: React.FC = ({ id, hostname, quality, location }: any) => (
  <div key={id} className="info-card-container">
    <div className="info-container">
      <IonThumbnail>
        <img
          alt={`${location?.country || "Missing"} Flag`}
          src={`${process.env.REACT_APP_API_URL}/flags/4x3/${
            location?.countryCode?.toLowerCase() || "missing"
          }.svg`}
        />
      </IonThumbnail>
      <div className="text-info-card">
        <IonText color="dark" className="card-title">
          Server {id}
        </IonText>
        <IonText color="medium" className="card-subtitle">
          {location.country}
        </IonText>
        {/* <IonText color="medium" className="card-subtitle">
          {hostname}
        </IonText> */}
      </div>
    </div>

    <div className="info-container">
      {quality && (
        <div className="server-transfer-info">
          <IonIcon icon={ChartBoldIcon}></IonIcon>
          <IonText color="dark">{quality}</IonText>
        </div>
      )}
      {/* {premium ? <IonIcon src={CrowBoldIcon} slot="end"></IonIcon> : <IonIcon src={CrowIcon} slot="end"></IonIcon>} */}
    </div>
  </div>
);

export default ServerInfoCard;
