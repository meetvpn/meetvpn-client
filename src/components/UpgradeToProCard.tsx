import {IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon} from '@ionic/react';
import BoldBigCrownIcon from '../assets/icon/bold-big-crown.svg';
import './UpgradeToProCard.css';

const UpgradeToProCard: React.FC = () => {
  return (
    <IonCard color="success" className="upgrade-card-container">
      <IonCardHeader>
        <IonIcon src={BoldBigCrownIcon}></IonIcon>
        <div>
          <IonCardTitle>Upgrade to Pro</IonCardTitle>
          <IonCardSubtitle>Access to all Servers. Dont worry you can cancel at any time</IonCardSubtitle>
        </div>
      </IonCardHeader>

      <IonButton className="btn-upgrade-now" expand="block">Upgrade Now</IonButton>
    </IonCard>
  );
};

export default UpgradeToProCard;