import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../CSS/PanA.css";
import 'react-fontawesome';
import DashA from './DashA';


//import { Link } from 'react-router-dom';
class PanA extends Component{

  render(){
    return(
<div>
    <DashA/>
      <div class="page-content p-5" id="content">


<div>
<div className="main" >
<h4>Transaction Logs</h4>
<hr/>
<div class="table-responsive">
<table class="table caption-top">
<h6 style={{display:"inline"}}>Ether Transaction</h6><button type="button" class="btn btn-primary btn-sm" data-toggle="button" aria-pressed="false" autocomplete="off" style={{float:"right",display: "inline"}} onclick="myFunction()">
    Refund
   </button>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Transaction ID</th>
      <th scope="col">Ether</th>
      <th scope="col">From</th>
      <th scope="col">Timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>123</td>
      <td>1</td>
      <td>abc</td>
      <td>2:00</td>
    </tr>
  </tbody>
</table>
</div>
<div class="table-responsive">
<table class="table caption-top">
  <h6>Token Transaction</h6>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Transaction ID</th>
      <th scope="col">Token</th>
      <th scope="col">To</th>
      <th scope="col">Timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>456</td>
      <td>100</td>
      <td>zyx</td>
      <td>5:00</td>
    </tr>
  </tbody>
</table>
</div>

</div>

</div>
</div>
</div>
    )
  }
}
export default PanA