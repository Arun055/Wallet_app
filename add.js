
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
var contactdb = firebase.database().ref("wallet");
var contactdb1 = firebase.database().ref("transaction");
document.getElementById("aform").addEventListener("submit", submitform);
function submitform(e) {
    e.preventDefault();
    var cno = getval("cno");
    var pin = getval("pin");
    var amt = getval('amt')
    FetchAllData(cno, pin, amt);



}
function FetchAllData(cno, pin, amt) {
    firebase.database().ref('wallet').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().cardno;
                let b = ChildSnapshot.val().password;
                let c = ChildSnapshot.val().name;
                let d = ChildSnapshot.val().cvv;
                let g = ChildSnapshot.val().amount;
                let tot = Number(g) + Number(amt)
                if (a == cno && b == pin) {
                    savemessage(tot, cno, b, c, d)
                    var er = new Date();
                    var day = er.getDate();
                    var mt = er.getMonth();
                    var yr = er.getFullYear();
                    var dt = day + "-" + mt + "-" + yr
                    transaction(c, a, amt, dt)

                    change();


                }



            }
        );

    })
}
function change() {
    var dv = document.getElementById("ji");
    var fm = document.getElementById("aform");
    dv.removeChild(fm)
    let h = document.createElement("h1");
    let o = document.createTextNode("SUCCESS")
    h.classList.add("h")
    h.appendChild(o)
    dv.appendChild(h)
    let img = document.createElement("img");
    img.classList.add("im1")
    dv.appendChild(img)

}

const savemessage = (amt, cno, b, c, d) => {
    firebase.database().ref('wallet/' + cno).set({
        amount: amt,
        cardno: cno,
        cvv: d,
        name: c,
        password: b

    });
}
const transaction = (a1, b1, c1, d1) => {
    var newcontactdb = contactdb1.push();
    newcontactdb.set({
        name1: a1,
        cardno1: b1,
        amount1: c1,
        date1: d1,
        status: "Credited"

    });
}

const getval = (id) => {
    return document.getElementById(id).value;


}