import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../CSS/TransactionI.css";
import 'react-fontawesome';
import DashI from './DashI'
//import {App} from "../App";


class  TransactionI extends Component{

     copyClipboard() {
        /* Get the text field */
        const copyText = document.getElementById("owneraddress");
        
        /* Select the text field */
        copyText.select();
        //copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text
        alert("Copied the text: " + copyText.value); */
      }/*
      handleBuyTokens = async() =>{
        await this.tokensaleInstance.methods.buyTokens(this.accounts[0]).send({from: this.accounts[0], value: this.web3.utils.toWei("1","wei")})
    }*/
    
      render(){
        return(
<div>
        
      <DashI/>
  
{/*<!-- End vertical navbar -->*/}


{/*<!-- Page content holder -->*/}
<div class="page-content p-5" id="content">
 {/* <!-- Toggle button -->*/}
  

  
     

    
    
{/*
      <div class="input-group mb-3">
        <input type="text" id="transachash" name="transachash" class="form-control border-primary" placeholder="Transaction Hash" aria-label="Owners address"  aria-describedby="button-addon2"/>
         <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button">Submit</button>
        </div>
        
    </div>
*/}
     <div class="input-group-append">
    <label style={{color: "blue", font: "sans-serif" ,fontSize: "16px", marginBottom: "0%"}}>Owner Address</label>
   <div class="input-group mb-3">
      <input type="text" id="owneraddress" name="owneraddress" class="form-control border-primary" value= {this.tokenSaleAddress} readonly/>
     <div class="input-group-append">
        <button class="btn btn-outline-primary" type="button" onClick={()=>this.copyClipboard()}>copy</button>
     </div>
    </div>
    </div>
    <button class="btn btn-primary mb-2  my-2 my-sm-0" type="button">Buy Tokens Now</button>
</div>
</div>
        )
}
}
export default TransactionI