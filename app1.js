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
document.getElementById("lform").addEventListener("submit", submitfn);
function submitfn(e) {
    e.preventDefault();
    var name = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    FetchAllData(name, password);
}
var ct = 0;


function FetchAllData(name, password) {
    firebase.database().ref('form').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().name;
                let b = ChildSnapshot.val().password;
                if (a == name && b == password) {
                    ct = 1


                }



            }
        );
        Valid(ct, name)
    })
}

function Valid(ct, name) {
    if (ct == 1) {
        console.log(name);
        sessionStorage.setItem('name', JSON.stringify(name));
        window.location = 'index.html';


    }
    else {
        alert("Enter the valid mail")
    }
}


