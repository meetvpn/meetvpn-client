import { useEffect, useState } from "react";
import { useParams } from "react-router";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonButtons,
  IonToolbar,
  IonButton,
  IonList,
  IonThumbnail,
  IonText,
  IonIcon,
} from "@ionic/react";

import ItemServerInfoParam from "../components/ItemServerInfoParam";
import { IServerInfoDetails } from "../interfaces";

import EEUUFlag from "../assets/img/countries/eeuu.svg";
import UploadIcon from "../assets/icon/upload.svg";
import DownloadIcon from "../assets/icon/download.svg";
import HeartIcon from "../assets/icon/heart.svg";
import ChartIcon from '../assets/icon/bold-chart.svg'
import HealthIcon from '../assets/icon/health.svg'

import "./ServerDetail.css";

// const serverDetail: IServerInfoDetails = {
//   name: "United State",
//   ip: "24.12.001.124",
//   premium: false,
//   ms: "44 MS",
//   photo: EEUUFlag,
// };

const ServerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [server, setServer] = useState<IServerInfoDetails | null>(null);

  // useEffect(() => {
  //   setTimeout(() => setServer(serverDetail), 200);
  // }, [id]);

  return (
    <IonPage>
      <IonHeader className="header-container ion-no-border">
        <IonToolbar className="toolbar-header-container">
          <IonText color="dark" className="title" slot="start">
            Detail Server
          </IonText>

          <IonButtons slot="end">
            <IonButton fill="clear" color="dark" className="btn-done">
              <IonIcon src={HeartIcon}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="server-list-page">
        <div className="screen-content">
          <div className="server-info-container">
            <div className="server-info">
              <IonThumbnail className="server-flag">
                <img src={EEUUFlag} alt="Flag" />
              </IonThumbnail>

              {/* <IonText color="dark" className="server-name">
                {server?.name}
              </IonText>
              <IonText color="medium" className="server-ip">
                {`IP: ${server?.ip}`}
              </IonText> */}
            </div>

            <IonList className="details-container">
              <ItemServerInfoParam
                title="Upload"
                amount="12.99"
                measureType="Mb/s"
                icon={UploadIcon}
              />
              <ItemServerInfoParam
                title="Download"
                amount="12.99"
                measureType="Mb/s"
                icon={DownloadIcon}
              />
              <ItemServerInfoParam
                title="Current Ping"
                amount="400"
                measureType="MS"
                icon={ChartIcon}
              />
              <ItemServerInfoParam
                title="Network Accuracy"
                amount="93"
                measureType="%"
                icon={HealthIcon}
              />
            </IonList>
          </div>

          <IonButton color="primary">Connect Server</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ServerDetail;
