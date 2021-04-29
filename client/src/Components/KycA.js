import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../CSS/KycA.css";
import 'react-fontawesome';

//import { Link } from 'react-router-dom';
//import * as  App from "../App";
//import App from '../App';
import DashA from './DashA'
class KycA extends Component{
  
 
  copyClipboard() {
    /* Get the text field */
    const copyText = document.getElementById("invaddress");
    
    /* Select the text field */
    copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text
    alert("Copied the text: " + copyText.value); */
  }/*
  handleInputChange = (event)=>{
    const target = event.target;
    const value = target.type ==="checkbox" ? target.checked :target.value;
    const name = target.name;

    App.setState({
        [name]:value  //here [name] = kycAddress and value = user a/c address
    })
}*/
//KYC Whitelisting
 /* handleKycWhitelisting = async() =>{
    //                                     user a/c address            contract deployer/owner address
    await App.kycInstance.methods.setKycCompleted(App.state.kycAddress).send({from: App.accounts[0]})
    alert("Kyc for "+App.state.kycAddress+"Is Completed!!")
}*/


    render(){
      
    return(
        <div>
          <DashA/>
  {/*<!-- End vertical navbar -->*/}
  
  
  {/*<!-- Page content holder -->*/}
  <div class="page-content p-5" id="content">
    {/*<!-- Toggle button -->*/}
    <button id="sidebarCollapse" type="button" class="btn btn-primary bg-primary rounded-pill shadow-sm px-4 mb-4 d-block d-sm-none"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small></button>
    
    <div class="input-group mb-3">
            <div class="input-group-append">
                <label class=" mb-2 my-2 my-sm-0"><h5> Address To Allow : </h5></label>
            </div>
            <input type="text" id="kycAddress" name="kycAddress" class="form-control border-primary" placeholder="Investor Address" aria-label="Investor Address"  aria-describedby="button-addon2"/>
             <div class="input-group-append">
                <button class="btn btn-primary" type="button" >Add To Whitelist</button>
            </div>
        </div> 


        <div className="main" >
            <h4>WhiteListed</h4>
            <hr/>
            <div class="table-responsive">
            <table class="table caption-top">
              
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Investor Address</th>
                  <th scope="col">Name</th>
                  <th scope="col">Stauts</th>
                  <th scope="col">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><input type="text" id="invaddress" name="invaddress" class="border-0" value="0xd034739c2ae957c70cd708092b946f62a49509d8" readOnly/>
                        <button class="btn btn-info" type="button" onClick={()=>this.copyClipboard()}>copy</button>
                  </td>
                  <td>Nikita</td>
                  <td style={{color:"red"}}>Pending</td>
                  <td>2:00</td>
                </tr>
              </tbody>
            </table>
            </div>
            
            </div>
           



        </div>
        </div>

    )
    }
}
export default KycA