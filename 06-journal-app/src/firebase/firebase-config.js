// importamos datos de firebase el cual instalamos con npm
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// colocamos nuestras credenciales que nos da firebase al crear nuestro poryecto en la consola de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCUqd10Sso2RyiCeLtHdSrUn8bg3H6g7ss",
    authDomain: "react-app-cursos-1919f.firebaseapp.com",
    projectId: "react-app-cursos-1919f",
    storageBucket: "react-app-cursos-1919f.appspot.com",
    messagingSenderId: "557995306938",
    appId: "1:557995306938:web:c63b4c56dacaccfe243783"
};
// inicializamos Firebase
firebase.initializeApp(firebaseConfig);

//declaramos la base de datos de firebase firestore
const db = firebase.firestore()

// declaramos el login que sera de tipo google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// exportamos varios
export {
    db,
    googleAuthProvider,
    firebase
}