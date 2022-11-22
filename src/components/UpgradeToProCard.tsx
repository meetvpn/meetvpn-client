import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './UpgradeToProCard.css';

const UpgradeToProCard: React.FC = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Upgrade to Pro</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                Access to all Servers. Dont worry you can cancel at any time.
            </IonCardContent>

            <IonButton routerLink="/tabs/home" expand="block">Upgrade Now</IonButton>
        </IonCard>
    );
};

export default UpgradeToProCard;
