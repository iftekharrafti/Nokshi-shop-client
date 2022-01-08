import {useEffect, useState} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,createUserWithEmailAndPassword , signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = (location, history) => {
      signInWithPopup(auth, provider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        history.replace(destination)
        setUser(result.user);
      }).catch((error) => {
        console.log(error.message);
      });
    }

    const registerUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setUser(userCredential.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

    const logOut = () =>{
      signOut(auth)
      .then(() => {
          setUser({})
      })
  }

// observe whether user auth state changed or not
useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        // User is signed out
        // ...
      }
    });
    return unsubscribe;
},[])

    return{
      user,
      signInUsingGoogle,
      registerUser,
      logOut
    }

};

export default useFirebase;