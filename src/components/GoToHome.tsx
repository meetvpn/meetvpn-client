import { IonRouterLink } from '@ionic/react';
import './GoToHome.css';

const GoToHome: React.FC = () => {
    return (
        <div className="container">
            <p>Go to <IonRouterLink routerLink='/tabs/home'>Home</IonRouterLink></p>
        </div>
    );
};

export default GoToHome;
