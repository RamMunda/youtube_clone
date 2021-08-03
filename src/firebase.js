import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDE6wZYRFl9-Om5s3U753vt7lj7mMgz3cw",
    authDomain: "ytclone-ab5e5.firebaseapp.com",
    projectId: "ytclone-ab5e5",
    storageBucket: "ytclone-ab5e5.appspot.com",
    messagingSenderId: "635746525059",
    appId: "1:635746525059:web:876e339de8bbb73e4f20b6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();