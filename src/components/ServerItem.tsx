import { IonItem, IonLabel, IonThumbnail, IonIcon } from '@ionic/react';

import ChartIcon from '../assets/icon/chart.svg';
import CrowIcon from '../assets/icon/crown.svg';


import './ServerList.css';

const ServerItem: React.FC = () => {
    return (
        <IonItem routerLink={`/tabs/servers/1`}>
            <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Argentina</IonLabel>
            <IonIcon icon={ChartIcon}></IonIcon>
            <IonLabel>44ms</IonLabel>
            <IonIcon src={CrowIcon} slot="end"></IonIcon>
        </IonItem>
    );
};

export default ServerItem;
