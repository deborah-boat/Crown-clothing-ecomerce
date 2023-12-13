

import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDW5YbtA0whu9_2I0H0YjtExkmRb_ReoyA",
    authDomain: "crown-clothing-db-b2493.firebaseapp.com",
    projectId: "crown-clothing-db-b2493",
    storageBucket: "crown-clothing-db-b2493.appspot.com",
    messagingSenderId: "840445604461",
    appId: "1:840445604461:web:bdb9af03429228f72bc564"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth,googleProvider);


  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth,
    additionalInformation ={}) => {
    if(!userAuth) return;

    const userDocRef = doc(db,'users',userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    

if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
        });
    }catch(error){
        console.log('error creating a user',error.message)
    }
}

return userDocRef;
  };

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser =async () => await signOut(auth)

export const onAuthStateChangedListener = (callback)=>
onAuthStateChanged(auth,callback)








  

