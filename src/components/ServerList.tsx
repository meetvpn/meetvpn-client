import {IonList, IonText, IonButton} from '@ionic/react';
import {ServerListProps} from "../interfaces";

import ServerInfoCard from "./ServerInfoCard";

import './ServerList.css';

const ServerList: React.FC<ServerListProps> = ({title, servers, premiumServers = false}) => (
  <IonList className="server-list-container">
    <IonText color="dark">
      {title}
      {premiumServers ?
        <IonButton fill="clear" color="warning">Go premium</IonButton> :
        <IonButton fill="clear" color="dark">View all</IonButton>}
    </IonText>

    <div className="server-list">
      {servers.map(server => (
        <ServerInfoCard key={server.ip} {...server}/>
      ))}
    </div>
  </IonList>
)

export default ServerList;
