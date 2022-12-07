import React from "react";
import {IonIcon, IonText, IonThumbnail} from "@ionic/react";
import {IServerInfoDetails} from "../interfaces";

import CrowIcon from '../assets/icon/crown.svg';
import CrowBoldIcon from '../assets/icon/bold-crown.svg';
import ChartBoldIcon from "../assets/icon/bold-chart.svg";

import './ServerInfoCard.css'

const ServerInfoCard: React.FC<IServerInfoDetails> = ({name, ip, premium, ms, photo}) => (
  <div className='info-card-container'>
    <div className='info-container'>
      <IonThumbnail>
        <img src={photo}/>
      </IonThumbnail>
      <div className='text-info-card'>
        <IonText color="dark" className="card-title">{name}</IonText>
        <IonText color="medium" className="card-subtitle">{`IP: ${ip}`}</IonText>
      </div>
    </div>

    <div className='info-container'>
      {ms && <div className='server-transfer-info'>
          <IonIcon icon={ChartBoldIcon}></IonIcon>
          <IonText color="dark">{ms}</IonText>
      </div>}
      {premium ? <IonIcon src={CrowBoldIcon} slot="end"></IonIcon> : <IonIcon src={CrowIcon} slot="end"></IonIcon>}
    </div>
  </div>
);

export default ServerInfoCard