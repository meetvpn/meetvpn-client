import React, { useState } from 'react';
import { IonContent, IonText, IonPage, IonImg, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/react';
import { Clipboard } from '@capacitor/clipboard';

import GoToHome from '../components/GoToHome';

import DocumentCopyIcon from '../assets/icon/document-copy.svg';
import MeetVPNIco from "../assets/icon/meet-vpn.svg";

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
            <IonContent fullscreen>
                <div className="container">
                    <IonImg src={MeetVPNIco} alt="logo-meet-vpn" />

                    <div>
                        <IonText color="dark" className="d-block margin-bottom-48">
                            <h3 className="title">
                                You HAVE
                                <br /> SUCCESSFULLY CREATED YOUR ACCOUNT{" "}
                            </h3>
                        </IonText>

                        <form noValidate onSubmit={addEmail}>
                            <IonLabel color="dark" className="subtitle">
                                Use the following Key to next login
                            </IonLabel>

                            <div className="input-group">
                                <IonInput value="2568" disabled={true}></IonInput>
                                <IonButton
                                    fill="clear"
                                    color="medium"
                                    onClick={() => console.log("Copy to clickboard")}
                                >
                                    Copy Key
                                    <IonIcon slot="end" src={DocumentCopyIcon}></IonIcon>
                                </IonButton>
                            </div>

                            <div className="divider" />

                            <div>
                                <IonLabel color="dark" className="subtitle">
                                    Add your Email for recovery your account
                                </IonLabel>

                                <IonInput
                                    className="custom"
                                    type="email"
                                    placeholder="Email"
                                    onIonInput={(event) => validate(event)}
                                    onIonBlur={() => markTouched()}
                                ></IonInput>
                            </div>

                            <IonButton
                                type="submit"
                                expand="block"
                                color="success"
                                className="margin-top-30"
                            >
                                Add email
                            </IonButton>
                        </form>
                    </div>

                    <GoToHome />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AccountCreated;
