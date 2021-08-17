// import React, { useEffect } from 'react';
// import GoogleButton from 'react-google-button';
// import { connect } from 'react-redux';
// import { signIn, signOut } from '../actions/index';
// import { CLIENT_ID } from '../utils/clientIdGoogle';
// import history from '../history';


// const GoogleAuth = () => {
//     useEffect(() => {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: CLIENT_ID,
//                 scope: 'email'
//             })
//             .then(()=>{
//                 // auth = window.gapi.auth2.getAuthInstance();
//                 // onAuthChange(auth.isSignedIn.get());
//                 // auth.isSignedIn.listen(onAuthChange);
//             });
//         });
//     }, []);

//     const onAuthChange = (isSignedIn) => {
//         if(isSignedIn) {
//           const profile = auth.currentUser.get().getBasicProfile(); 
//           signIn(profile);
//         }
//         else {
//               signOut();
//         }
//    }

//    const manageLogin = () => {
//     onSignInClick();
//     history.push('/')
// } 

// const renderAuthButton = () => {
//     if(!isSignedIn) {
//         return <GoogleButton
//                     onClick={ manageLogin }
//                 />
//     }
//     else {
//         return <GoogleButton 
//                     onClick={onSignOutClick} 
//                     type="light" 
//                     label="SIGN OUT" 
//                 />
//     }
// }

//     const onSignInClick = ()=> {
//         signIn();
//     }
    
//     const onSignOutClick = ()=> {
//         signOut();
//     }

//     return ( 
//         <div>
//             {renderAuthButton()} 
//         </div>
//      );
// }
 
// export default GoogleAuth;

// import React, { Component } from 'react';
// import GoogleButton from 'react-google-button';
// import { connect } from 'react-redux';
// import { signIn, signOut } from '../actions/index';
// import { CLIENT_ID } from '../utils/clientIdGoogle';
// import history from '../history';


// class GoogleAuth extends Component {

//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: CLIENT_ID,
//                 scope: 'email'
//             })
//             .then(()=>{
//                 this.auth = window.gapi.auth2.getAuthInstance();
//                 this.onAuthChange(this.auth.isSignedIn.get());
//                 this.auth.isSignedIn.listen(this.onAuthChange);
//             });
//         });
//     }

    
//     onAuthChange = (isSignedIn) => {
//           if(isSignedIn) {
//             const profile = this.auth.currentUser.get().getBasicProfile(); 
//             this.props.signIn(profile);
//           }
//           else {
//               this.props.signOut();
//           }
//      }
     
//     manageLogin = () => {
//         this.onSignInClick();
//         history.push('/')
//     } 

//      renderAuthButton() {
//         if(!this.props.isSignedIn) {
//             return <GoogleButton
//                         onClick={ this.manageLogin }
//                     />
//         }
//         else {
//             return <GoogleButton 
//                         onClick={this.onSignOutClick} 
//                         type="light" 
//                         label="SIGN OUT" 
//                     />
//         }
//     }

//     onSignInClick = ()=> {
//         this.auth?.signIn();
//     }

//     onSignOutClick = ()=> {
//         this.auth.signOut();
//     }
        

//     render() { 
//         return ( 
//             <div>
//                 {this.renderAuthButton()} 
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return { isSignedIn: state.google.isSignedIn }
// }

 
// export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);


 


