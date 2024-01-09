import React, { useState } from 'react';
import styled from 'styled-components';
import image from './images/image1.svg'

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const Counter = styled.div`
  display: flex;
  -moz-box-align: center;
  align-items: end;
  border: 2px solid black;
  height: 32vw;
  width:70vw;
  margin-left: 234px;
  margin-right: 234px;
  margin-top: 65px;
  @media (max-width: 600px){
    flex-direction:column;
    margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
   height:931px;
   align-items:center;
  }
`
;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 27vw;
  padding: 31px;
  border: 2px solid rgb(194, 175, 69);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
  height: 23vw;
  margin-left: 0vw;

  @media (max-width: 600px){
  width: 72vw;
  padding: 34px;
  margin-left: 0px;
  }
`;
const ImgSet = styled.img`
height : 23vw;
padding :77px;
@media (max-width:600px){
  height: 85vw;
  padding: 46px;

}
`


const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Counter>
    <ImgSet src={image} alt=""/>
     
    
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Log In</Button>
      </Form>
    </LoginFormWrapper>
    </Counter>
  );
};

export default LoginForm;
