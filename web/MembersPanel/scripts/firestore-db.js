const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       phone:"",
       whatsapp:"",
       department:"",
       department2:"",
       college:"",
       status:"",
       gender:"",
       address:"",
       exp:""

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
      userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
      height: 50vh;margin-top:80px">
      
      <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
      <div id="form_header_container" style="width: 100%;
      height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
      border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
          <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
          font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> MEMBERS PORTAL </h2>
      </div>

      <div id="form_content_container" style="width: 100%; height: 90%; float: left; display: flex;justify-content: center;align-items: center;padding-top: 30px;">
          <div id="form_content_inner_container" style="width: 75%;height: 100%;float: left;">
           
          <form autocomplete="off" onsubmit="login(event)" >
              

            <input type="email" id="loginEmail" placeholder="Email" style="width: 100%;
              height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
              font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">
             

              <input type="password" id="loginPassword" placeholder="Password" style="width: 100%;
              height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
              font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">

              <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 5px;" >
                  <button type="submit" style="width: 100%;height: 100%;background: transparent;color: inherit;font-family: Montserrat;letter-spacing: 1px;
                  font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                  
              </div>
           </form>
          </div>
      </div></div>
  </div>
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

                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">


    

                        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Main</li>

                       

                        <li>
                            <a href="index.html"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                        </li>

                        <li >
							<a href="activities.html"><i class="fa fa-bell-o"></i> <span>Notifications</span></a>
						</li>
				
						         
                       
                        <li>
                        <a href="employees.html"><i class="fa fa-users"></i> <span>Members List</span></a>
                       </li>

                       <li>
                        <a href="attendance.html"><i class="fa fa-calendar-check-o"></i> <span>Attendance</span></a>
                       </li>

                       <li>
                       <a href="leaves.html"><i class=" fa fa-edit"></i> <span>Leaves</span></a>
                      </li>

                        <li>
                            <a href="payments.html"><i class="fa fa-money"></i> <span>Payments</span></a>
                        </li>

                        <li>
                            <a href="calendar.html"><i class="fa fa-calendar"></i> <span>Calendar</span></a>
                        </li>
   
                    </ul>
                </div>
            </div>
        </div>

        




        <div class="page-wrapper">
        <div class="content">
            <div class="row">
                <div class="col-sm-7 col-6">
                    <h4 class="page-title" style="float:left;font-weight:500;margin-top:-10px">My Profile</h4>
                </div>

                <div class="col-sm-5 col-6 text-right m-b-30">
                    <a href="activities.html" style="background-color:cornflowerblue;padding:10px;color:white;border">Dashboard</a>
                </div>
            </div>
            <div class="card-box profile-header" style="background-color: rgb(219, 219, 219);">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-view">
                            <div class="profile-img-wrap">
                                <div class="profile-img">
                                    <a href="#"><img class="avatar" src="../assets/img/user.jpg" alt=""></a>
                                </div>
                            </div>
                            <div class="profile-basic">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="profile-info-left" style="text-align:left">
                                            <h3 class="user-name m-t-0 mb-0">${userInfo.name}</h3>
                                            <div class="staff-id">Registration ID : <span style="font-weight:bolder">${userInfo.regno}</span></div>
                                            <h4 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department :</span> ${userInfo.department}</h4>
                                            <h5 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department2 :</span> ${userInfo.department2}</h5>
                                            
                                    
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul class="personal-info" style="text-align:left">
                                            <li>
                                                <span class="title">Phone:</span>
                                                <span class="text"><a>${userInfo.phone}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Whatsapp:</span>
                                                <span class="text"><a>${userInfo.whatsapp}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Email:</span>
                                                <span class="text"><a><span class="__cf_email__">${userInfo.email}</span></a></span>
                                            </li>
                                            
                                            <li>
                                                <span class="title">Address:</span>
                                                <span class="text">${userInfo.address}</span>
                                            </li>
                                            <li>
                                                <span class="title">Gender:</span>
                                                <span class="text">${userInfo.gender}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
    <div class="profile-tabs">
      <ul class="nav nav-tabs nav-tabs-bottom">
        <li class="nav-item"><a class="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
      
      </ul>

      <div class="tab-content">
        <div class="tab-pane show active" id="about-cont">
            <div class="row">
                <div class="col-md-12">
                    <div class="card-box" style="text-align:left">
                        <h3 class="card-title">Education Informations</h3>
                        <div class="experience-box">
                            <ul class="experience-list">
                                <li>
                                    
                                    <div class="experience-content">
                                        <div class="timeline-content">
                                            <a class="name">${userInfo.college}</a>
                                            
                                        </div>
                                    </div>
                                </li>

                            
                               
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
        
      </div>

      <div class="card-box mb-0" style="text-align:left">
      <h3 class="card-title">Experience</h3>
      <div class="experience-box">
          <ul class="experience-list">
              <li>
                  <div class="experience-user">
                      <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                      <div class="timeline-content">
                          <a class="name">${userInfo.exp}</a>
                        
                      </div>
                  </div>
              </li>
             
            
          </ul>
      </div>
  </div>
    </div>
        </div>
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["college"].value = userInfo.college
                        editProfile["department"].value = userInfo.department
                        editProfile["status"].value = userInfo.status

                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 50vh;margin-top:80px">
        
        <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
        border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
            <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
            font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> MEMBERS PORTAL </h2>
        </div>

        <div id="form_content_container" style="width: 100%; height: 90%; float: left; display: flex;justify-content: center;align-items: center;padding-top: 30px;">
            <div id="form_content_inner_container" style="width: 75%;height: 100%;float: left;">
             
            <form autocomplete="off" onsubmit="login(event)" >
                

              <input type="email" id="loginEmail" placeholder="Email" style="width: 100%;
                height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
                font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">
               

                <input type="password" id="loginPassword" placeholder="Password" style="width: 100%;
                height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
                font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">

                <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 5px;" >
                    <button type="submit" style="width: 100%;height: 100%;background: transparent;color: inherit;font-family: Montserrat;letter-spacing: 1px;
                    font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                    
                </div>
             </form>
            </div>
        </div></div>
    </div>

    </div></div>


    <div class="sidebar-overlay" data-reff=""></div>
    <script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/Chart.bundle.js"></script>
    <script src="assets/js/chart.js"></script>
    <script src="assets/js/app.js"></script>
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
        department:editProfile["department"].value,
        status:editProfile["status"].value

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
            <td>${info.status}</td>
          </tr>
           `
    })
 
}










//Attendance


function updateattendance(event){
  event.preventDefault()
  var Dec2 = document.getElementById('attend').value
  var Dec2f = document.getElementById('work').value
  var userRef = firebase.firestore().collection('attendance').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    Dec2:Dec2,
    Dec2f:Dec2f

  },{ merge: true}).then(()=>{
    document.querySelector('.alert').style.display = 'block';

     // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },5000);

 // Clear form
 document.getElementById('attendanceform').reset();

  });
}



//suggestions

function sendMessage(event){
  event.preventDefault()
  var message = document.getElementById('msg').value
  var name = document.getElementById('name').value
  var userRef = firebase.firestore().collection('membermsg').add({
    message:message,
    name:name,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).then(()=>{
    document.querySelector('.alert').style.display = 'block';

  });
}






















