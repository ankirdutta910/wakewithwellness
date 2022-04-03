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
  var whatsapp = getInputVal('Whatsapp');
  var blood = getInputVal('Blood');
  var qualifications = getInputVal('Qualifications');
  var college = getInputVal('College');
  var state = getInputVal('State');
  var pincode = getInputVal('Pincode');
  var country = getInputVal('Country');
  var department = getInputVal('Department');

  var experience = getInputVal('Experience');
  var checkbox = getInputVal('Checkbox');
  


  // Save message
  saveData(name, email, contact, whatsapp, blood, qualifications, college, state, pincode, country, department, experience, checkbox);


 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('registrations').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, email, contact, whatsapp, blood, qualifications, college, state, pincode, country, department, experience, checkbox){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    email:email,
    contact:contact,
    whatsapp:whatsapp,
    blood:blood,
    qualifications:qualifications,
    college:college,
    state:state,
    pincode:pincode,
    country:country,
    department:department,
    experience:experience,
    checkbox:checkbox
  });
}
