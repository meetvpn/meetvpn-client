import { IonList, IonText } from '@ionic/react';

import ServerItem from './ServerItem';

import './ServerList.css';

interface ServerListProps {
    title: string;
}


const ServerList: React.FC<ServerListProps> = ({ title }) => {
    return (
        <IonList>
            <IonText> <h3>{title}</h3> </IonText>
            <ServerItem />
            <ServerItem />
            <ServerItem />
            <ServerItem />
        </IonList>
    );
};

export default ServerList;
