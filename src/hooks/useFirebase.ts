import React, { useState } from 'react';
import firebase from 'firebase';
export function useFirebase() {

    const [loggedIn, setLogin] = useState(false);

  const userLogin = async (email:any ,password:any) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{ console.log(resp); },err=>{ console.log(err); })
  };

  const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result: any) {
        setLogin(true);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error code: " + errorCode + ", " + errorMessage);
    });
  }

  const signOut = () => {
    let user = firebase.auth().currentUser;
    if(user){
      firebase.auth().signOut();
      setLogin(false);
      console.log("Signed Out");
    } else {
      console.log("You must be signed in to log out");
    }
  }

  return {
    userLogin,
    googleSignIn,
    signOut,
    loggedIn
  };

}