import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../CSS/DashA.css";
import 'react-fontawesome';
import avtar from '../Images/avtar.png';


//import { Link } from 'react-router-dom';
class DashA extends Component{
  /*$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });*/
  render(){
    return(
<div>
<div class="vertical-nav bg-light" id="sidebar">
        <div class="py-4 px-3 mb-4 bg-light">
          <div class="media d-flex align-items-center">
            <img  src={avtar} alt="..." width="80" height="80" class="mr-3 rounded-circle img-thumbnail shadow-sm"/>
            <div class="media-body">
              <h4 class="m-0">Nikita</h4>
              <p class="font-weight-normal text-muted mb-0">Crowdfunding Member</p>
            </div>
          </div>
        </div>
      
        <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Dashboard</p>
        
        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="PortfolioA.html" class="nav-link text-dark bg-light">
                      <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                      Portfolio
                  </a>
          </li>
          <li class="nav-item">
            <a href="AboutTokensA.html" class="nav-link text-dark bg-light">
                      <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                      About Tokens
                  </a>
          </li>
          <li class="nav-item">
            <a href="/KycA" class="nav-link text-dark bg-light">
                      <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                      KYC Verification
                  </a>
          </li>{/*
          <li class="nav-item">
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      Gallery
                  </a>
          </li>*/}
        </ul>
      
        <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Pannel</p>
      
        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="/PanA" class="nav-link text-dark bg-light">
                      <i class="fa fa-user mr-3 text-primary fa-fw"></i>
                      Admin Pannel
                  </a>
          </li>
          
          <li class="nav-item">
            <a href="/Login"class="nav-link text-dark bg-light">                
               <i class="fa fa-sign-out mr-3 text-primary fa-fw"></i>
                Log Out                         
            </a>
          </li>
        </ul>
      
      </div>
  {/*<!-- End vertical navbar -->*/}
  
  
  {/*<!-- Page content holder -->*/}
  <div class="page-content p-5" id="content">
    {/*<!-- Toggle button -->*/}
    <button id="sidebarCollapse" type="button" class="btn btn-primary bg-primary rounded-pill shadow-sm px-4 mb-4 d-block d-sm-none"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small></button>
  
    
    
    <div class="row">
      <div class="card-deck">
        
          <div class="card bg-primary shadow h-90 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-left">
                  <div class="col mr-2">
                    <div class="text-xs text-white mb-1">Token Name  <i class="fas fa-money-check-alt fa-1x float-right"></i></div>
                    <div class="h5 mb-0 text-white">MyToken</div>
                    
                  </div>
                </div>
            </div>
          </div>
      
          <div class="card bg-primary shadow h-90 py-2">
            <div class="card-body">
                <div class="row no-gutters">
                  <div class="col mr-2">
                    <div class="text-xs  text-white  mb-1 text-left">Token Symbol  <i class="fab fa-ethereum fa-1x float-right"></i></div>
                    <div class="h5 mb-0 text-white text-left">MTK</div>
                  </div>
                </div>
            </div>
          </div>
      
          <div class="card bg-primary shadow h-90 py-2">
            <div class="card-body">
                <div class="row no-gutters">
                  <div class="col mr-2">
                    <div class="text-xs  text-white  mb-1 text-left">Token Count  <i class="fas fa-funnel-dollar fa-1x float-right"></i></div>
                    <div class="h5 mb-0 text-white">1000</div>
                    </div>
                </div>
            </div>
          </div>
      
          <div class="card bg-primary shadow h-90 py-2">
            <div class="card-body">
                <div class="row no-gutters">
                  <div class="col mr-2">
                    <div class="text-xs  text-white mb-1 text-left">Token Balance  <i class="fas fa-money-bill fa-1x float-right"></i></div>
                    <div class="h5 mb-0 text-white text-left">100</div>
                    
                  </div>
                </div>
            </div>
          </div>
      
          <div class="card bg-primary shadow h-90 py-2">
            <div class="card-body">
                <div class="row no-gutters">
                  <div class="col mr-2">
                    <div class="text-xs  text-white text-left mb-1">Token Sold  <i class="fas fa-money-bill fa-1x float-right"></i></div>
                    <div class="h5 mb-0 text-white text-left">20</div>  
                  </div>
                </div>
            </div>
          </div>
    </div>
    </div>
    




<br/><br/>


        <div class="row" style={{marginLeft : "27%"}}>
          <div class="card-deck">
            <div class="card bg-primary shadow h-90 py-2">
              <div class="card-body">
                  <div class="row no-gutters">
                    <div class="col mr-2">
                      <div class="text-xs text-white text-left mb-1">Start Date  <i class="fa fa-calendar fa-1x float-right" aria-hidden="true"></i></div>
                      <div class="h5 mb-0 text-white text-left">12:00<br/>1 March,21<br/>IST</div>
                    </div>
                  </div>
              </div>
            </div>
          
          
            <div class="card bg-primary shadow h-90 py-2">
              <div class="card-body">
                  <div class="row no-gutters">
                    <div class="col mr-2">
                      <div class="text-xs  text-white  mb-1">End Date  <i class="fa fa-calendar fa-1x float-right" aria-hidden="true"></i></div>
                      <div class="h5 mb-0 text-white">12:00<br/>15 March,21<br/>IST</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
         </div>
         <br/><br/>
         
         
         
         
         
         
         {/*
         <div class="row" style={{marginleft: "50%"}}>
            <div class="col-xl-8 col-md-6 mb-4">
                <canvas id="myChart"></canvas>
                 </div>
        </div>*/}
                
            









  





</div>
</div>
)
}
}
export default DashA