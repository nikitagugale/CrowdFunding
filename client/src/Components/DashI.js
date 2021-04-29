import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../CSS/DashI.css";
import 'react-fontawesome';
import avtar from "../Images/avtar.png";

const DashI = () =>{
    /*  $(function() {
        // Sidebar toggle behavior
        $('#sidebarCollapse').on('click', function() {
          $('#sidebar, #content').toggleClass('active');
        });
      });*/
        return(
    <div>
            <div class="container1">
  
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
        <a href="PortfolioI.html" class="nav-link text-dark bg-light">
                  <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                  Portfolio
              </a>
      </li>
      <li class="nav-item">
        <a href="AboutTokensI.html" class="nav-link text-dark bg-light">
                  <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                  About Tokens
              </a>
      </li>
      <li class="nav-item">
        <a href="/TransactionI" class="nav-link text-dark bg-light">
                  <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                  Transaction
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
  
    <ul class="nav flex-column bg-light mb-0" >
      <li class="nav-item">
        <a href="Investorpan.html" class="nav-link text-dark bg-light">
                  <i class="fa fa-user mr-3 text-primary fa-fw"></i>
                  Investor Pannel
              </a>
      </li>
      
      <li class="nav-item">
        <a href="Login.html" class="nav-link text-dark bg-light">
                  <i class="fa fa-sign-out mr-3 text-primary fa-fw"></i>
                 Log Out
              </a>
      </li>
    </ul>
  </div>
  
  {/*<!-- End vertical navbar -->*/}
  </div>
  
  {/*<!-- Page content holder -->*/}
  <div class="page-content p-5" id="content">
    
    <button id="sidebarCollapse" type="button" class="btn btn-primary bg-primary rounded-pill shadow-sm px-4 mb-4 d-block d-sm-none"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small></button>
      
        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-primary shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs text-primary mb-1">Token Name  <i class="fas fa-money-check-alt fa-3x"></i></div>
                      <div class="h5 mb-0 text-primary">MyToken</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-primary shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs  text-primary  mb-1">Token Symbol  <i class="fab fa-ethereum fa-3x"></i></div>
                      <div class="h5 mb-0 text-primary">MTK</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-primary shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs  text-primary  mb-1">Token Count   <i class="fas fa-funnel-dollar fa-3x"></i></div>
                      <div class="h5 mb-0 text-primary">1000</div>
                      
                    </div>
                  </div>
              </div>
            </div>
          </div><div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-primary shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary mb-1">Token Balance  <i class="fas fa-money-bill fa-3x"></i></div>
                      <div class="h5 mb-0 text-primary">100</div>
                      
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
  
  
  
  
  
  
  
  
          <div class="row" style={{marginLeft: "25%"}}>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-primary mb-1">Start Date  <i class="fa fa-calendar fa-1x float-right" aria-hidden="true"></i></div>
                        <div class="h5 mb-0 text-primary">12:00<br/>1 March,21<br/>IST</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs  text-primary  mb-1">End Date  <i class="fa fa-calendar fa-1x float-right" aria-hidden="true"></i></div>
                        <div class="h5 mb-0 text-primary">12:00<br/>15 March,21<br/>IST</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
           
        
            </div>
    
  
          
  
  
  
  
  
       
    
    
    
  
  </div>


    </div>
        )
}
export default DashI