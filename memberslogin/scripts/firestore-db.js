const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       phone:"",
       whatsapp:"",
       department:"",
       college:""
   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('users')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `
   }    
    }else{
        userDetails.innerHTML = `
        <div class="container">

      
        <h4 style="color: yellow;margin-top:120px">'Member login only'</h4></div>

        <div class="container" style="margin-top:50px">
          

          <p style="color:white">Be a part of this welfare operation by undertaking the pledge to serve people and generation.<br>
          Looking forward towards the growth of an incredible community</p>
          <p></p>
          

  </div>
  <div class="container" style="width:200px;background-color:#5793D1;padding:8px;border-radius: 8px;margin-top:70px;cursor: pointer">
  <a class="modal-trigger" href="#modal2" id="loginli" style="color:white;padding:8px;width:200px">Login</a></div>
        `
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('users')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `
                        <div class="userdee" style="background-color:#5793D1;text-align: left;width: 100%;padding: 10px">
                          <div class="collection-item"><h5 style="color:white">${userInfo.name}</h5></div>
                          <div class="collection-item"  style="color:rgb(219, 219, 219)"> E-mail :  ${userInfo.email}<br>
                          Contact no :  ${userInfo.phone}<br>
                          Whatsapp no :  ${userInfo.whatsapp}<br>
                          Department :  ${userInfo.department}<br>
                          College :  ${userInfo.college}</div>
                        </div>


                        <div class="container-fluid" style="padding: 10px;margin-top: 30px;text-align: center;">

      <div class="logged-in" style="background-color: rgb(73, 73, 73);cursor: pointer;padding: 10px;border-radius: 8px;text-align: center;box-shadow: 1px 3px 5px rgba(0,0,0,0.1);width: 100%;height: 40px;">
        <a  href="message.html" style="color: #f2f2f2;" >Feedbacks
        </a>
     </div>
      

     <div class="logged-in" style="background-color: rgb(73, 73, 73);cursor: pointer;padding: 10px;border-radius: 8px;text-align: center;box-shadow: 1px 3px 5px rgba(0,0,0,0.1);width: 100%;height: 40px;margin-top: 6px;">
      <a  href="attendanceform.html" style="color: #f2f2f2;">Attendance
      </a>

     </div>

     <div class="logged-in" style="background-color: rgb(73, 73, 73);cursor: pointer;padding: 10px;border-radius: 8px;text-align: center;box-shadow: 1px 3px 5px rgba(0,0,0,0.1);width: 100%;height: 40px;margin-top: 6px;">
      <a  href="memberagreement.html" style="color: #f2f2f2;">Agreement
      </a>

     </div>

  </div>

                      




  
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["college"].value = userInfo.college
                        editProfile["department"].value = userInfo.department

                       


                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <div class="container">

      
        <h4 style="color: yellow;margin-top:120px;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"">'Member login only'</h4></div>

        <div class="container" style="margin-top:50px">
          

          <p style="color:white">Be a part of this welfare operation by undertaking the pledge to serve people and generation.<br>
          Looking forward towards the growth of an incredible community</p>
          <p></p>
          

  </div>
  <div class="container" style="width:200px;background-color:#5793D1;padding:8px;border-radius: 8px;margin-top:70px;cursor: pointer">
  <a class="modal-trigger" href="#modal2" id="loginli" style="color:white;padding:8px;width:200px">Login</a></div>
        
       
        `
    }
}


function updateUserProfile(e){
    e.preventDefault()
    const userDocRef =  firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)


    userDocRef.update({
        name:editProfile["name"].value,
        email:editProfile["profileEmail"].value,
        phone:editProfile["phoneno"].value,
        whatsapp:editProfile["whatsapp"].value,
        college:editProfile["college"].value,
        department:editProfile["department"].value

    })

    M.Modal.getInstance(myModel[2]).close()
}





async function allUserDetails(){
  document.getElementById('table').style.display='table'
  const userRef = await firebase.firestore().collection('users').get()  
  userRef.docs.forEach(doc=>{
           const info =   doc.data()
           document.getElementById('tbody').innerHTML += `
           <tr>
            <td>${info.name}</td>
            <td>${info.email}</td>
            <td>${info.phone}</td>
            <td>${info.whatsapp}</td>
            <td>${info.experience}</td>
            <td>${info.college}</td>
          </tr>
           `
    })
 
}




//Attendance


function updateattendance(event){
  event.preventDefault()
  var July1 = document.getElementById('attend').value
  var July1f = document.getElementById('work').value
  var userRef = firebase.firestore().collection('attendance').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    July1:July1,
    July1f:July1f
  },{ merge: true}).then(()=>{
    document.querySelector('.alert').style.display = 'block';

  });
}



function sendMessage(event){
  event.preventDefault()
  var message = document.getElementById('msg').value
  var userRef = firebase.firestore().collection('membermsg').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    message:message
  }).then(()=>{
    document.querySelector('.alert').style.display = 'block';

  });
}











