import firebase from 'firebase'

if (!firebase.apps.length) {
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: 'AIzaSyD5z8ZG51kzsMoWvjirSEAbfyRUkQiaxss',
    authDomain: 'goldfish-app-5ad43.firebaseapp.com',
    databaseURL: 'https://goldfish-app-5ad43.firebaseio.com',
    projectId: 'goldfish-app-5ad43',
    storageBucket: 'goldfish-app-5ad43.appspot.com',
    messagingSenderId: '617768268734',
    appId: '1:617768268734:web:2a018a352a6818d1d83fef',
    measurementId: 'G-ZCRSWZ9V4S'
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}

export default firebase
