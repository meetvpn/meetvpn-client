import React, { useState } from 'react';
import { Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from "@ionic/react";
import { logIn, logOut, musicalNotes, search } from 'ionicons/icons';
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Providers */
import { OutlineProvider } from "./providers/outline-provider";

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn, setState] = useState(false);

  const logout = async () => {
    setState(false);
  };
  const login = async () => {
    setState(true);
  };

  return (
    <OutlineProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main" when="(min-width: 850px)">
            <IonMenu contentId="main" side="end" type="push">
              <IonHeader>
                <IonToolbar>
                  <IonTitle>MeetVPN</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonList lines="none">
                </IonList>
              </IonContent>
            </IonMenu>
            <IonPage id="main">
              <IonRouterOutlet>
                <Route exact path="/" component={Home} />
              </IonRouterOutlet>
            </IonPage>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </OutlineProvider>
  );
}
export default App;
