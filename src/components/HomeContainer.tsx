import {
  IonSpinner,
  IonButton
} from "@ionic/react";
import { OutlineStatus, useOutline } from "../providers/outline-provider";

import './HomeContainer.css';

const HomeContainer: React.FC = () => {
  const { status, connect, disconnect } = useOutline();

  return (
    <div className="container">
      {status === OutlineStatus.loading && (
        <IonSpinner />
      )}
      {status === OutlineStatus.connected && (
        <IonButton color="success" fill="outline" shape="round" size="large" onClick={() => disconnect()}>Disconnect</IonButton>
      )}
      {status === OutlineStatus.disconnected && (
        <IonButton color="dark" fill="outline" shape="round" size="large" onClick={() => connect()}>Connect</IonButton>
      )}
      {status === OutlineStatus.reconnecting && (
        <IonSpinner />
      )}
    </div>
  );
};

export default HomeContainer;
