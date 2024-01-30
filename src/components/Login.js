import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

const Login = () => {
  const apiUrl = process.env.REACT_APP_BACKEND_URL || 'https://social-soso-backend-1.onrender.com';
  const history = useNavigate();
  const [values,setValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const addUserLogin = async(e) => {
    e.preventDefault();

    const {email,password}= values;

   if(email === "")
    alert("please enter your email")
    else if(!email.includes("@"))
    alert("pleare enter valid email")
    else if(password === "")
    alert("please enter your password")
    else if(password.length < 6)
    alert("password is too sort")
   
    else 
    console.log("login successfully");
    const data = await fetch(`${apiUrl}/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })

     })
     const res = await data.json();
     console.log(res);

     if(res.status === 201){
      
      localStorage.setItem("usersdatatoken",res.result.token);
      history("/dash");
      setValues({...values,email:"",password:""});
     }
  };

 

  return (
    <div className="login-form">
      <h2>Wellcome back to</h2>
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="password-group">
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleInput}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="show-password-button"
            onClick={handleShowPasswordToggle}
          >
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>
        <button type="submit" onClick={addUserLogin}>Login</button>
        <p>
          Don't you have account <a href="/register">signup</a>
        </p>
        <p>
          Don't you have account <a href="/login">ssss</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
