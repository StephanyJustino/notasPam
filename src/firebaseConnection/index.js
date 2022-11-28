import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCD-d8RNkwYrPq4pMs7xpBnCziPHVRrt-s",
    authDomain: "aula01-a5f15.firebaseapp.com",
    databaseURL: "https://aula01-a5f15-default-rtdb.firebaseio.com",
    projectId: "aula01-a5f15",
    storageBucket: "aula01-a5f15.appspot.com",
    messagingSenderId: "535133290627",
    appId: "1:535133290627:web:026b3287e8cf5a2ca6dbb6",
    measurementId: "G-NGDH970PH3"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;