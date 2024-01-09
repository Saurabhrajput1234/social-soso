import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './contextProvider/ContextProvider';
// import userImage from './images/saurabh1.jpg';
import "./Dashboard.css";


const Dashboard = () => {
   //context
  //  const{logindata,setLoginData}=useContext(LoginContext);
  //  console.log(logindata);


  // const history = useNavigate();

  // const DashboardValid = async()=>{
  //   let token = localStorage.getItem("usersdatatoken");
  //   // console.log(token)
  //   const res = await fetch("/validuser",{
  //     method:"GET",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization" : token
  //     }
  //   });
  //   const data = await res.json();
     
  // if(data.status === 401 || !data){
  //   history("*")
  //   // console.log("error page redirect");

  // }
  // else{
  //   history("/dash")
  //   setLoginData(data);
  //   // console.log(data)
  // }

  // }

  // // useEffect(()=>{
  // //   DashboardValid();
  // },[])
  return (
   <>
   {/* <section className="main">

   <div className="user">
    <div className="profile">
      <img id='userImage' src={userImage} alt="profile" />
      <div className="profile-Details">
      <div>
        <span className="user-name">saurabhrajput828</span> <button className="edit-profile">Edit Profile</button>
        <button className="edit-profile">View archive</button></div>
        <div>
          <span>9 posts</span>
          <span>250 followers</span>
          <span>358 following</span>
        </div>
        <div>Saurabh Rajput</div>
        <div>AKGEC</div>
      </div>
    </div>
   </div>
   </section>
    */}
   

   </>
  )
}

export default Dashboard
