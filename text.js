var n = ""
var n = JSON.parse(sessionStorage.getItem('name'));
var x = document.getElementById("uname");
x.innerText = n;
var lo = document.getElementById("lgout");

function logout() {
    x.innerText = ""
    lo.innerText = "LOGIN"
    lo.classList.remove("btn-danger")
    lo.classList.add("btn-success")

}
/*-----------------------------------fire base-----------------------------*/
const firebaseConfig = {
    apiKey: "AIzaSyCVLRTyfjoGofrF_bWF2td1CwKf3QiBVGA",
    authDomain: "walletpro-e4f1b.firebaseapp.com",
    databaseURL: "https://walletpro-e4f1b-default-rtdb.firebaseio.com",
    projectId: "walletpro-e4f1b",
    storageBucket: "walletpro-e4f1b.appspot.com",
    messagingSenderId: "449201075906",
    appId: "1:449201075906:web:403576736d550d60886d5b",
    measurementId: "G-V89S53MS7P"
};
firebase.initializeApp(firebaseConfig);

