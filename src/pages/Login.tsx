import React, {useState} from 'react';
import {IonPage, IonImg, IonText, IonContent, IonInput, IonLabel, IonButton} from '@ionic/react';

import MeetVPNIco from "../assets/icon/meet-vpn.svg";

import "./Login.css";

const Login: React.FC = () => {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();

    const validateEmail = (email: string) => {
        return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;

        setIsValid(undefined);

        if (value === '') return;

        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true);
    };

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        // setFormSubmitted(true);
        // if(!username) {
        //   setUsernameError(true);
        // }
        // if(!password) {
        //   setPasswordError(true);
        // }

        // if(username && password) {
        //   await setIsLoggedIn(true);
        //   await setUsernameAction(username);
        //   history.push('/tabs/schedule', {direction: 'none'});
        // }
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="login-container">
                    <IonImg src={MeetVPNIco} alt="logo-meet-vpn"/>

                    <div>
                        <IonText color="dark">
                            <h3 className="title">Log in</h3>
                        </IonText>

                        <IonText color="medium" className="welcome-text">
                            <p className="subtitle">Welcome back You've been missed!</p>
                        </IonText>

                        <form noValidate onSubmit={login}>
                            <IonLabel color="dark" className="subtitle">
                                Account ID
                            </IonLabel>
                            <IonInput
                                className="custom"
                                type="number"
                                placeholder="Enter  your account ID"
                                onIonInput={(event) => validate(event)}
                                onIonBlur={() => markTouched()}
                            ></IonInput>
                            <IonButton
                                color="medium"
                                fill="clear"
                                routerLink="/tabs/home"
                                className="forgot-id"
                            >
                                Forget your ID?
                            </IonButton>

                            <IonButton
                                color="success"
                                type="submit"
                                expand="block"
                                className="login"
                            >
                                Log in
                            </IonButton>
                            <IonButton
                                routerLink="/tabs/account-created"
                                expand="block"
                                fill="outline"
                            >
                                Craete Account
                            </IonButton>
                        </form>
                    </div>

                    <IonButton color="success" fill="clear">
                        Restore Purchases
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
