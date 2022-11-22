import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonList, IonNote, IonRow, IonCol, IonRouterLink } from '@ionic/react';
import { Clipboard } from '@capacitor/clipboard';

import GoToHome from '../components/GoToHome';

import DocumentCopyIcon from '../assets/icon/document-copy.svg';

import './AccountCreated.css';

const AccountCreated: React.FC = () => {
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

    const addEmail = async (e: React.FormEvent) => {
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

    const writeToClipboard = async () => {
        await Clipboard.write({
            string: "Hello World!"
        });
    };

    const checkClipboard = async () => {
        const { type, value } = await Clipboard.read();

        console.log(`Got ${type} from clipboard: ${value}`);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>AccountCreated</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">AccountCreated</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <form noValidate onSubmit={addEmail}>
                    <IonList>
                        <IonItem>
                            <IonLabel position='stacked'>Use the following Key to get started</IonLabel>
                            <IonInput value="0000-0000-0000-0000" disabled={true}></IonInput>
                            <IonButton fill="outline" >
                                Copy Key
                                <IonIcon slot="end" src={DocumentCopyIcon}></IonIcon>
                            </IonButton>
                        </IonItem>
                        <IonItem fill="solid" className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                            <IonLabel position="stacked">Add your Email for recovery your Acccount (Optional)</IonLabel>
                            <IonInput type="email" placeholder='me@email.com' onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()}></IonInput>
                            <IonNote slot="helper">Enter a valid email</IonNote>
                            <IonNote slot="error">Invalid email</IonNote>
                        </IonItem>
                    </IonList>
                    <IonRow>
                        <IonCol>
                            <IonButton type="submit" expand="block">Add email</IonButton>
                        </IonCol>
                    </IonRow>
                </form>

                <div className="container">
                    <p>Go to <IonRouterLink routerLink='/tabs/home'>Home</IonRouterLink></p>
                </div>

                <GoToHome />
            </IonContent>
        </IonPage>
    );
};

export default AccountCreated;
