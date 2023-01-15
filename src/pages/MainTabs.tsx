import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { Route, Redirect } from 'react-router';

import HomeIcon from '../assets/icon/home.svg';
import DiscoverIcon from '../assets/icon/discover.svg';
// import FavoriteIcon from '../assets/icon/favorite.svg';
// import ProfileIcon from '../assets/icon/profile.svg';

import Home from './Home';
import ServerListPage from './ServerListPage';
import ServerDetail from './ServerDetail';
// import Favorite from './Favorite';
// import Profile from './Profile';
// import AccountCreated from "./AccountCreated";
// import Settings from "./Settings";

// import PrivateRoute from '../components/PrivateRoute';
// import PublicRoute from "../components/PublicRoute";
// import SettingsAccount from "./SettingAccount";
// import FaqAndGuides from "./FaqAndGuides";
// import ReportProblem from "./ReportProblem";

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/home" />
                {/*
                    Using the render method prop cuts down the number of renders your components will have due to route changes.
                    Use the component prop when your component depends on the RouterComponentProps passed in automatically.
                */}
                <Route path="/tabs/home" render={() => <Home />} exact={true} />
                {/* <PrivateRoute component={ServerListPage} path="/tabs/servers" exact={true} /> */}
                <Route path="/tabs/servers" component={ServerListPage} exact={true} />
                {/* <Route path="/tabs/servers" render={() => <ServerList />} exact={true} /> */}
                <Route path="/tabs/servers/:id" component={ServerDetail} exact={true} />
                {/* <Route path="/tabs/favorite" render={() => <Favorite />} exact={true} />
                <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
                <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
                <Route path="/tabs/settings/account" render={() => <SettingsAccount />} exact={true} />
                <Route path="/tabs/settings/report-problem" render={() => <ReportProblem />} exact={true} />
                <Route path="/tabs/settings/faq" render={() => <FaqAndGuides />} exact={true} />
                <PublicRoute restricted={true} component={AccountCreated} path="/tabs/account-created" exact={true} /> */}
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon src={HomeIcon} />
                </IonTabButton>
                <IonTabButton tab="servers" href="/tabs/servers">
                    <IonIcon src={DiscoverIcon} />
                </IonTabButton>
                {/* <IonTabButton tab="favorite" href="/tabs/favorite">
                    <IonIcon src={FavoriteIcon} />
                </IonTabButton>
                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon src={ProfileIcon} />
                </IonTabButton> */}
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;