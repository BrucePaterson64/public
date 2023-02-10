
function upload() {
var head = document.getElementById("heading").value;
var check = document.getElementById("check").value;
 db.collection("report").add({
    title: head,
    check: check,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
 

}