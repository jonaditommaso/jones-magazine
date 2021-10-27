import React, { useEffect, useState } from 'react';
import { GOOGLE_CLIENT_ID } from '../utils/key';
import { connect } from 'react-redux';
import { signInGoogle, signOutGoogle } from '../actions';
import GoogleButton from 'react-google-button';
import history from '../history';

const SignInWithGoogle = ({isSignedIn, signInGoogle, signOutGoogle}) => {

    const [auth, setAuth] = useState('');

    useEffect(() => {
        const getClient = () => {
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: GOOGLE_CLIENT_ID,
                    scope: 'email'
                })
                .then(() => {
                    setAuth(window.gapi.auth2.getAuthInstance())
                    onAuthChange(auth.isSignedIn.get());
                    auth.isSignedIn.listen(onAuthChange);
                });
        })}
        if(!isSignedIn) {
            getClient();
        }
        
            
    }, [auth]);


    const onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
          const profile = auth.currentUser.get().getBasicProfile(); 
          signInGoogle(profile);
        }
        else {
            signOutGoogle();
        }
   }

    const manageClick = (param) => {
        if (param === 'in') {
            auth?.signIn();
            history.push('/');
        }
        else if (param === 'out') {
            auth?.signOut();
        }
    }

    return ( 
        <>
            {!isSignedIn
            ?  <GoogleButton 
                label="Iniciar sesión con Google"
                onClick={()=> manageClick('in')}
                />

            :   <GoogleButton
                type="light" 
                label="Cerrar sesión" 
                onClick={()=> manageClick('out')}
                />
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.google.isSignedIn }
}

export default connect(mapStateToProps, { signInGoogle, signOutGoogle })(SignInWithGoogle);

