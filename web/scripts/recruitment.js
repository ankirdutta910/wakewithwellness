//Connection
var firebaseConfig = {
    apiKey: "AIzaSyBTOvD0aod-fntZ0VYbT6EAp9z1L_bqKwY",
    authDomain: "website-818ed.firebaseapp.com",
    projectId: "website-818ed",
    storageBucket: "website-818ed.appspot.com",
    messagingSenderId: "542030860652",
    appId: "1:542030860652:web:ee0bef0509915aa1da2349",
    measurementId: "G-2VWCQ9QR4S"
  };

//Init Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var dataRef = firebase.database().ref("Recruitment/");

// Listen for form submit
document.getElementById('registrations').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('Membername');
  var email = getInputVal('Email');
  var contact = getInputVal('Contact');
  var qualifications = getInputVal('Qualifications');
  var college = getInputVal('College');
  var department = getInputVal('Department');

  var checkbox = getInputVal('Checkbox');
  


  // Save message
  saveData(name, email, contact, qualifications, college, department, checkbox);


 // Show alert
 document.querySelector('.alert').style.display = 'block';
 document.querySelector('.form').style.display = 'none';


 // Clear form
 document.getElementById('registrations').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, email, contact, qualifications, college, department, checkbox){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    email:email,
    contact:contact,
    qualifications:qualifications,
    college:college,
    department:department,
    checkbox:checkbox
  });
}
