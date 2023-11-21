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
var contactdb = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();
    var name = getval("name");
    var mail = getval("mail");
    var mobile = getval("mobile");
    var password = getval("password");

    savemessage(name, mail, mobile, password);


}
const savemessage = (name, mail, mobile, password) => {
    var newcontactdb = contactdb.push();
    newcontactdb.set({
        name: name,
        mail: mail,
        mobile: mobile,
        password: password,
    });
}

const getval = (id) => {
    return document.getElementById(id).value;


}
FetchAllData();
function FetchAllData() {
    firebase.database().ref('form').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().name;
                console.log(a);
            }
        );
    })
}