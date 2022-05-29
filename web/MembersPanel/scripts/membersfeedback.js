const Atten  = document.querySelector('.Atten')



function createUserCollection(user){
   firebase.firestore().collection('feedbacks')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
     

       

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('feedbacks')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
    Atten.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>

       `
   }    
    }else{
        Atten.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 43vh;margin-top:180px">
        
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
                <a href="#" onclick="forgotPass()">Forgot Password</a><br>
                <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 15px;" >
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
        .collection('feedbacks')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        Atten.innerHTML = `

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
                    <a href="main.html"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
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
               <a href="attenUpdates.html"><i class="fa fa-pencil"></i> <span>Attendance Updates</span></a>
              </li>

               <li>
               <a href="leaves.html"><i class=" fa fa-edit"></i> <span>Leaves</span></a>
              </li>

                <li>
                    <a href="payments.html"><i class="fa fa-money active"></i> <span>Payments</span></a>
                </li>

            </ul>
        </div>
    </div>
</div>

        


 <div class="page-wrapper">
            <div class="content" style="color: white">
          
                <div class="row">
                    <div class="col-lg-12">
						
                        
                        <div class="testbox">
                        <form onsubmit="updateattendance(event)" id="feedbackform">
                        <h1 style="color: #fff;text-align: center;">MEMBERS FEEDBACK</h1><hr>

                        <div class="form-group row">
                         <label for="name" class="col-sm-2 col-form-label">Name :</label>
                         <div class="col-sm-10">
                              <input type="text" readonly class="form-control" value="${userInfo.name}" id="name">
                         </div>
                         </div>
                         <div class="form-group row">
                         <label for="regno" class="col-sm-2 col-form-label">Registration No. :</label>
                         <div class="col-sm-10">
                               <input type="text" readonly class="form-control" value="${userInfo.regno}" id="regno">
                         </div>
                         </div>
                       
                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-2 col-form-label">Email ID :</label>
                         <div class="col-sm-10">
                               <input type="text" readonly  class="form-control" value="${userInfo.email}" id="regno">
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Are the tasks or events held meeting the development of society?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Agree">Agree</option>
                                  <option style="color: black;font-weight: 400;" value="Disagree">Disagree</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Are the number of tasks held enough for the functioning of the team ?(i.e 2 events per week)
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="Should increase">Should increase</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Are you happy with the functioning of departments?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="May improve">May improve</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Are you happy with the functioning of the current board?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="May improve">May improve</option>
                              </select>
                         </div>
                         </div>


                         
                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">How would you rate the overall performance of the entire board
                         </label>
                         <div class="col-sm-6">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Select</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select>
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Is WWW helping in developing your social and management skills ?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="Not sure">Not sure</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Is WWW meeting your expectations as an Organization?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="Not sure">Not sure</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Is our official website user friendly?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="Not sure">Not sure</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Are you willing to continue in WWW for the coming years?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="Not sure">Not sure</option>
                              </select>
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">What are the necessary changes we need to make if any ?
                         </label>
                         <div class="col-sm-6">
                         <textarea id="work" maxlength="300" style="padding: 1px;color:white"  required ></textarea>
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Are you interested  for managing the board?
                         </label>
                         <div class="col-sm-6">
                              <select id="attend" style="color: white;font-weight: 400;">
                              <option style="color: grey" value="Present">Select</option>
                                  <option style="color: black;font-weight: 400;" value="Yes">Yes</option>
                                  <option style="color: black;font-weight: 400;" value="No">No</option>
                                  <option style="color: black;font-weight: 400;" value="Not sure">Not sure</option>
                              </select>
                         </div>
                         </div>
                        
                        









                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of HR and Finance Head : <span style="font-weight: bold">Sudhanshu Borthakur</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Administrative Head : <span style="font-weight: bold">Arnavraj Baruah</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Technical & Logistics Head : <span style="font-weight: bold">Ankur Jyoti Dutta</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Head of Operations : <span style="font-weight: bold">Sanjushree Bharadwaj</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Events Head : <span style="font-weight: bold">Rudra Nath</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Public Relations Head : <span style="font-weight: bold">Rahul kar</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Public Relations Head : <span style="font-weight: bold">Jimpi Deka</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Editorial Head : <span style="font-weight: bold">Krishnakshi Majumdar</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>



                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Curation Head : <span style="font-weight: bold">Jaidhitya Jonna</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Curation Head : <span style="font-weight: bold">Vedant Rasal</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Outreach Head : <span style="font-weight: bold">Amit Debbarma</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>


                         <div class="form-group row">
                         <label for="inputPassword" class="col-sm-6 col-form-label">Rate the overall performance of Publicity & Marketing Head : <span style="font-weight: bold">Shruti Tater</span>
                         </label>
                         <div class="col-sm-2">
                         <select id="attend" style="color: white;font-weight: 400;">
                         <option style="color: grey" value="Present">Rating</option>
                             <option style="color: black;font-weight: 400;" value="1">1</option>
                             <option style="color: black;font-weight: 400;" value="2">2</option>
                             <option style="color: black;font-weight: 400;" value="3">3</option>
                             <option style="color: black;font-weight: 400;" value="4">4</option>
                             <option style="color: black;font-weight: 400;" value="5">5</option>
                             <option style="color: black;font-weight: 400;" value="6">6</option>
                             <option style="color: black;font-weight: 400;" value="7">7</option>
                             <option style="color: black;font-weight: 400;" value="8">8</option>
                             <option style="color: black;font-weight: 400;" value="9">9</option>
                             <option style="color: black;font-weight: 400;" value="10">10</option>
                         </select> 
                         </div>
                         </div>


                        
                         
                    
                        
                         
                         
                         
                         
                         
                         <div class="alert">Successful</div>
                          <div class="btn-block">
                            <button style="margin-left:16px;background-color:#009efb" id="send" type="submit" >Post</button> 
                             </div>
                          <div class="container-fluid" style="margin-bottom:40px;">
           
            </div>
                        </form>
                      </div> 
                    
                    
                    </div>
            </div>
           
        </div>
    </div>
         
        </div>

        
                       
                        `
               
                
                      

                }    
             }
        })


    }else{
        Atten.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 43vh;margin-top:180px">
        
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
                <a href="#" onclick="forgotPass()">Forgot Password</a><br>
                <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 15px;" >
                
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





//Attendance


function updateattendance(event){
  event.preventDefault()
  var Feb1 = document.getElementById('attend').value
  var Feb1f = document.getElementById('work').value
  var userRef = firebase.firestore().collection('feedbacks').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
       Feb1:Feb1,
       Feb1f:Feb1f

  },{ merge: true}).then(()=>{
    document.querySelector('.alert').style.display = 'block';

     // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },5000);

 // Clear form
 document.getElementById('feedbackform').reset();

  });
}




           
