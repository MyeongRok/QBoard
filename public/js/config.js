var firebase;

var firebaseConfig = {
    apiKey: "AIzaSyDmjYpsjCPlcHqaIPm1Wp-Q03EfwNXEbbc",
    authDomain: "qboard-5c4f3.firebaseapp.com",
    databaseURL: "https://qboard-5c4f3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qboard-5c4f3",
    storageBucket: "qboard-5c4f3.appspot.com",
    messagingSenderId: "891945288478",
    appId: "1:891945288478:web:cf982b5fb3f5b162ab3f0f"    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// URL pararmeter
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results==null){
        return null;
    }else{
        return results[1] || 0;
    }
}
