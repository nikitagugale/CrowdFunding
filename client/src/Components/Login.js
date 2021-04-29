import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Login.css";
//import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
//import {Image} from 'react-image-and-background-image-fade';
//import DashA from './DashA';
import avtar from '../Images/avtar.png';




class Login extends Component{
  validate(){
    
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if(username.value === 'nikita1@gmail.com' && password.value === 'nikita123')
    {
      this.props.history.push('/DashA');
    }
    else if(username.value === 'isha1@gmail.com' && password.value === 'isha123')
    {
      this.props.history.push('/DashI');
    }
    else alert("Invalid Users")
}
  render(){
    return(
      
<div className="LoginB">
<img src={avtar} alt="Avatar" class="avatar"/>
       <section class='login'>
  
    
    <form id ='form' name="form">
      <label for='username'>
        Username
        <input id='username' name="username" placeholder="abc@gmail.com" type='email' required/>
      </label>
      <label for='password'>
        Password
        <input id='password' name="password" type='password' required/>
      </label>
      <button type='submit' id="login" name="login" onClick={()=>this.validate()}>Login</button>
    </form>
    <div id="formFooter" style={{paddingleft: "100px"}}>
    <a class="underlineHover" href="/SignUp">SignUp</a> |	<a class="underlineHover" href="/Main">Forgot Password?</a>
		  </div>
	  
  </section>
</div>

    )
  }
}
export default Login