import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  console.log(values);
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUrerData = async(e) => {
    e.preventDefault();

    const {name,email,password,cPassword}= values;

    if(name === '')
    alert("please enter your name")
    else if(email === "")
    alert("please enter your email")
    else if(!email.includes("@"))
    alert("pleare enter valid email")
    else if(password === "")
    alert("please enter your password")
    else if(password.length < 6)
    alert("password is too sort")
    else if(cPassword === "")
    alert("please enter your confirm password")
    
    else if (password !== cPassword)
    alert ("password are not match")
    else {
   
      
     const data = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,password,cPassword
      })

     })
     const res = await data.json();
     console.log(res);}
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form >
        <div className="form-group">
          <label>Name:</label>
          <input type="email" name="name" onChange={handleInput} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleInput} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type={!passShow ? "password" : "text"}
            name="password"
            onChange={handleInput}
          />
          <div className="showpass" onClick={() => setPassShow(!passShow)}>
            {!passShow ? "Show" : "Hide"}
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="cPassword" onChange={handleInput} />
        </div>
        <button type="submit" onClick={addUrerData}>Register</button>
        <p>
          already have account <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
