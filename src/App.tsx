import { Route, Redirect } from "react-router-dom";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Providers */
import { OutlineProvider } from "./providers/OutlineProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { IonReactRouter } from "@ionic/react-router";

import MainTabs from "./pages/MainTabs";
import Login from "./pages/Login";
import SplashPage from "./pages/SplashPage";

import PublicRoute from "./components/PublicRoute";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/helpers.css";

setupIonicReact();

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <OutlineProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet id="main">
              <PublicRoute
                restricted={true}
                component={Login}
                path="/login"
                exact={true}
              />
              <PublicRoute component={SplashPage} path="/splash" exact={true} />
              <Route path="/tabs" render={() => <MainTabs />} />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/tabs/home" />}
              />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </OutlineProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
