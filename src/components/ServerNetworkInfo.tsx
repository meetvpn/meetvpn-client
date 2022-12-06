import React from "react";
import {IonIcon, IonText} from "@ionic/react";
import {IServerNetworkInfo} from "../interfaces";

import UploadIcon from '../assets/icon/upload.svg'
import DownloadIcon from '../assets/icon/download.svg'

import './ServerNetworkInfo.css';

const ServerNetworkInfo: React.FC<IServerNetworkInfo> = ({transferType, amount}) => <div
    className="network-info-card-container">
    {transferType === "Upload" ? <IonIcon src={UploadIcon}></IonIcon> : <IonIcon src={DownloadIcon}></IonIcon>}
    <div className='text-info-card'>
        <IonText color="dark" className="card-subtitle">Upload</IonText>
        <IonText color="dark" className="card-title">
            <span>{amount}</span>
            <span>Mb/s</span>
        </IonText>

    </div>

</div>

export default ServerNetworkInfo