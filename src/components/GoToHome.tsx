import { IonRouterLink } from '@ionic/react';
import './GoToHome.css';

const GoToHome: React.FC = () => {
    return (
        <p className="ion-text-center go-home">
            Go to <IonRouterLink routerLink="/tabs/home">Home</IonRouterLink>
        </p>
    );
};

export default GoToHome;
