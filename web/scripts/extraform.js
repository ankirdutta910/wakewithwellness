//Connection
const firebaseConfig = {
  apiKey: "AIzaSyDPI48GnqgmNA9aD42AO7MErMgVTcBVdQU",
  authDomain: "interns-ed08d.firebaseapp.com",
  databaseURL: "https://interns-ed08d-default-rtdb.firebaseio.com",
  projectId: "interns-ed08d",
  storageBucket: "interns-ed08d.appspot.com",
  messagingSenderId: "821769104185",
  appId: "1:821769104185:web:253f71ca9aa6b592f7d6e8",
  measurementId: "G-7EHCSN5SY8"
};

//Init Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var dataRef = firebase.database().ref('agreement');

// Listen for form submit
document.getElementById('extraForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Membername = getInputVal('Membername');
  var Email = getInputVal('Email');
  var Contact = getInputVal('Contact');
  var Whatsapp = getInputVal('Whatsapp');
  var Alternate = getInputVal('Alternate');
  var College = getInputVal('College');
  var Department = getInputVal('Department');
  var Department2 = getInputVal('Department2');
  var Checkbox1 = getInputVal('Checkbox1');
  var Checkbox2= getInputVal('Checkbox2');
  var Checkbox3 = getInputVal('Checkbox3');
  var Checkbox4 = getInputVal('Checkbox4');
  var Checkbox5 = getInputVal('Checkbox5');
  var Checkbox6 = getInputVal('Checkbox6');
  var Checkbox7 = getInputVal('Checkbox7');
  


  // Save message
  saveData(Membername, Email, Contact, Whatsapp, Alternate, College, Department,Department2, Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5, Checkbox6, Checkbox7);


 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('extraForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(Membername, Email, Contact, Whatsapp, Alternate, College, Department,Department2, Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5, Checkbox6, Checkbox7){
  var newDataRef = dataRef.push();
  newDataRef.set({
    Membername: Membername,
    Email:Email,
    Contact:Contact,
    Whatsapp:Whatsapp,
    Alternate:Alternate,
    College:College,
    Department:Department,
    Department2:Department2,
    Checkbox1:Checkbox1,
    Checkbox2:Checkbox2,
    Checkbox3:Checkbox3,
    Checkbox4:Checkbox4,
    Checkbox5:Checkbox5,
    Checkbox6:Checkbox6,
    Checkbox7:Checkbox7

  });
}
