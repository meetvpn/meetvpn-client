import { IonItem, IonLabel, IonThumbnail, IonIcon } from "@ionic/react";

// import ChartIcon from "../assets/icon/chart.svg";
import HealthIcon from "../assets/icon/health.svg";

import "./ServerList.css";

const ServerItem: React.FC = ({ id, hostname, quality, location }: any) => {
  return (
    <IonItem routerLink={`/tabs/servers/${id}`}>
      <IonThumbnail slot="start">
        <img
          alt={`${location?.country || "Missing"} Flag`}
          src={`${process.env.REACT_APP_GETAWAY_BASE64}/flags/4x3/${
            location?.countryCode?.toLowerCase() || "missing"
          }.svg`}
        />
      </IonThumbnail>
      <IonLabel>
        <h2>Server {id}</h2>
        <p>{location?.country}</p>
      </IonLabel>
      <IonIcon icon={HealthIcon}></IonIcon>
      <IonLabel slot="end">{quality}%</IonLabel>
      {/* <IonIcon src={CrowIcon} slot="end"></IonIcon> */}
    </IonItem>
  );
};

export default ServerItem;
