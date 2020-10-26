import firebase from "firebase"
import "firebase/auth"

type IFirebaseConfig = {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
}

const firebaseConfig: IFirebaseConfig = {
    apiKey: "AIzaSyDJlsmdpRrO1t50TSS8xXv3s3eYbSJRo74",
    authDomain: "usejolly.firebaseapp.com",
    databaseURL: "https://usejolly.firebaseio.com",
    projectId: "usejolly",
    storageBucket: "usejolly.appspot.com",
    messagingSenderId: "244614411952",
    appId: "1:244614411952:web:0a20ec2ae9ef66b2406d75",
    measurementId: "G-Q81YMBJWX4"
};

const firebaseApp: any = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export {
    auth
}