import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Login.css";
//import { Link } from 'react-router-dom';

const SignUp = () =>{
    return(
<div className="LoginB">
<section class='login'>
  
  
    <form id ='form' action ="signup" method="POST">
      <label for='firstname'>
        First Name
        <input id='firstname' type='text' name="firstname" required/>
      </label>
      <label for='lastname'>
        Last Name
        <input id='lastname' type='text' name="lastname" required/>
      </label>
    <label for='username'>
      Username
      <input id='username' type='email' placeholder="abc@gmail.com" name="username" required/>
    </label>
    <label for='password'>
      Password
      <input id='password' type='password' name="password" required/>
    </label>
    <label for='confirmpassword'>
      Confirm Password
      <input id='confirmpassword' type='password' name="confirmpassword" required/>
    </label>
    <div class="form-check-inline">
      <label class="form-check-label" style={{color: "white"}}>
        <input type="radio" class="form-check-input" name="role" value="admin"/>Admin
        <input type="radio" class="form-check-input" name="role" value="investor"/>Investor
      </label>
    </div>
    <button type='submit' id="Signup">SignUp</button>
  </form>
  <div id="formFooter" style={{paddingleft: "100px"}}>
 
      <a class="underlineHover" href="/Login">Login</a>
      


    </div>
    
</section>


</div>
)
}
export default SignUp;