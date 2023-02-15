import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
const firebaseConfig = {
    apiKey: "AIzaSyAevbCtkbP2sSXsNcdShmuPiJbXAhOSn4o",
    authDomain: "a2b-inspection-report.firebaseapp.com",
    databaseURL: "https://a2b-inspection-report-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "a2b-inspection-report",
    storageBucket: "a2b-inspection-report.appspot.com",
    messagingSenderId: "195090597596",
    appId: "1:195090597596:web:b2ffa16b07f9b9422e5619",
    measurementId: "G-D31EDBZ6DJ"
  };
  firebase.initializeApp(firebaseConfig);

        const auth = getAuth;
        var txtEmail = document.getElementById("txtEmail");
        var txtPassword = document.getElementById("txtPassword");
        const btnLogin = document.getElementById("btnLogIn");
        const btnSignIn = document.getElementById("btnSignIn");
    
        btnLogin.addEventListener("click", () => {
            var email = txtEmail.value;
            var pass =txtPassword.value;
            firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
                alert ("Incorrect email / password!")
            });
            });               
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                 console.log(user);
                    window.location.href="report.html"
            } else {
                console.log("not signed in!");
            }
             }); 
            
       
  
       

       
        btnSignIn.addEventListener("click", () => {
             var email = txtEmail.value;
            var pass =txtPassword.value;
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
        const user = userCredential.user;
            // ...
        })
            .catch((err) => {
            console.log(err.code);
            console.log(err.message);
        })
  
    });

  
 