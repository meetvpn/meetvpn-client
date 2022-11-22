import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonNote, IonRow, IonCol, IonButton } from '@ionic/react';

import './Login.css';

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
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <form noValidate onSubmit={login}>
                    <IonItem fill="solid" className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                        <IonLabel position="stacked">Account Key</IonLabel>
                        <IonInput type="number" placeholder='0000-0000-0000-0000' onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()}></IonInput>
                        <IonNote slot="helper">Enter a valid key</IonNote>
                        <IonNote slot="error">Invalid key</IonNote>
                    </IonItem>

                    <IonRow>
                        <IonCol>
                            <IonButton type="submit" expand="block">Log in</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton routerLink="/tabs/account-created" color="light" expand="block">Craete Account</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </IonContent>
        </IonPage>

    );
};

export default Login;
