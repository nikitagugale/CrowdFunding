import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Main.css";
import img2 from '../Images/img2.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll,faFunnelDollar,faCommentsDollar,faCommentDollar,faCalendarWeek,faCertificate,faGlobe, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {faEthereum,faRavelry,faReplyd} from "@fortawesome/free-brands-svg-icons";

export default class Main extends Component{
	constructor() {
		super();
		this.state = {
		  showPopup: false
		};
	  }
	  togglePopup() {
		this.setState({
		  showPopup: !this.state.showPopup
		});
	  }
	render()
	{
    return(
<div>
        <nav id="nav" class="navbar fixed-top navbar-toggleable-sm" data-spy="affix">
			<div class="container"> <a href="/" class="navbar-brand">Brand</a>
					<ul class="nav justify-content-end">
					
					<a style={{color: "white"}} href="/Login" class="nav-link">Login</a>
					<a style={{color:" white"}} href="/SignUp" class="nav-link">Sign Up</a>
					</ul>
			</div>
		</nav>

	<section id="slideshow" style={{height: "300px", backgroundImage: `url(${img2})`}}>
		

		<section id="content">
			
			<h3>Let's Invest And Grow Together</h3>

		</section>

		
	

	</section>

	<div class="container" id="activeico">
		
		
					<br></br>
					<div class="card text-center border-primary mb-3">
  						<div class="card-header border-primary mb-3">
							<center><h3 style={{color: "blue"}}>Active ICO</h3></center>
  						</div>
 						 <div class="card-body">
    						<h5 class="card-title">TCS</h5>
    						<p class="card-text">Tata Consultancy Services is an Indian multinational information technology services and consulting company, headquartered in Mumbai, Maharashtra, India. As of February 2021 TCS is largest company in the IT sector in the world by Market capitalisation of $169.2 billion</p>
    						<ul><center><a href="/Login" class="btn btn-outline-primary">Buy now</a>
							<button class="btn btn-outline-primary" style={{marginLeft:"5px"}} onClick={this.togglePopup.bind(this)}>About Token</button></center></ul>
  						</div>
  						<div class="card-footer  border-primary mb-3">
							<center><small><b>Start date : 10/01/2021   End date: 30/01/2021</b></small></center>
  						</div>
					</div>
    </div>
        <br></br> 
    <footer>
		
		<img id="logo" src="img/logo.png" alt='...'></img>

		<p id="footer">© Copyright 2021. All Rights Reserved. | Crowd Funding</p>

	</footer>  
	{this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }          
</div>
)
}
}
class Popup extends React.Component {
	render() {
	  return (
		<div className='popup'>
		  <div className='popup_inner'>
		  <div class="h1 text-primary"> About Token</div>
		  <div class="main">
		  <div class="table-responsive" style={{width:"40%",borderRadius:"3px",boxShadow: "0 0 5px 0 rgb(0 0 0 / 10%)"}}>
            <table class="table caption-top">
                    <thead>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faCalendarWeek} />  </th>
                        <th scope="row">Start : 10/01/2021 <br></br>End : 30/01/2021</th>
                        </tr>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faEthereum} />  Token Name</th>
                        <th scope="row">My Token</th>
                    </tr>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faEthereum} />  Token Symbol</th>
                        <th scope="row">MT</th>
                    </tr>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faRavelry} />  Rate</th>
                        <th scope="row">1 wei</th>
                    </tr>                    
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faCertificate} />  KYC</th>
                        <th scope="row">KYC Required</th>
                    </tr>
					<tr>
						<th scope="row"><FontAwesomeIcon icon={faReplyd} />  Refund Claim</th>
                        <th scope="row">Possible</th>
                    </tr>
                    <tr>
                        <th scope="row"><FontAwesomeIcon icon={faGlobe} />  Platform</th>
                        <th scope="row">ERC20</th>
                    </tr>
                    <tr>
                         <th scope="row"><FontAwesomeIcon icon={faMapMarkerAlt}/>  Country</th>
                         <th scope ="row">India</th>
                    </tr>
					<tr>
						<th scope="row"><FontAwesomeIcon icon={faPoll} />  Market Place</th>
                        <th scope="row">#22</th>
                    </tr>
                    <tr>
                         <th scope="row"><FontAwesomeIcon icon={faFunnelDollar}/>  Market Cap</th>
                         <th scope ="row">48234 Cr.</th>
                    </tr>
                    <tr>
                         <th scope="row"><FontAwesomeIcon icon={faCommentsDollar}/>  Circulating Supply</th>
                         <th scope ="row">12861 Cr.Token</th>
                    </tr>
                    <tr>
                        <th scope="row"><FontAwesomeIcon icon={faCommentDollar}/>  Trading Activity</th>
                        <th scope ="row">66%Buy 34%Sell</th>
                    </tr>
                    </thead>
            </table>
        </div>
			
			<span className="close-icon" onClick={this.props.closePopup}>x</span>



			{/*
			<aside class="ico-sidebar div-block-36">

                                
                <div class="ico-row"><div class="ico-side-head"><FontAwesomeIcon icon={faCalendarWeek} /><div>ICO Main Sale</div><div class="sidebar-line"></div></div><div class="tags"><div class="ico-label">ICO Start</div><div class="ico-bold">
                    July 22, 2020
                </div></div><div class="tags"><div class="ico-label">ICO End</div><div class="ico-bold">

                    July 22, 2021                </div></div></div><div class="ico-row"><div class="ico-side-head"><img src="https://topicolist.com/wp-content/themes/topicolist/images/Oval-5-Copy-4.svg" width="15" class="side-icon" alt="PointPay ico information"/><div>Information</div><div class="sidebar-line"></div></div><div class="tags">
                <div class="ico-label">TOKEN</div><div class="ico-bold">PXP</div></div><div class="tags"><div class="ico-label">Price</div><div class="ico-bold">$0.10</div></div>

                                <div class="tags"><div class="ico-label">Soft cap</div>
                    <div class="ico-bold">
                    $1 000 000                </div>
                </div>
                
                                <div class="tags"><div class="ico-label">Hard cap</div>
                    <div class="ico-bold">
                        $30 000 000                    </div>
                </div>
                
                                <div class="tags"><div class="ico-label">Platform</div><div class="ico-bold">ERC20</div></div><div class="tags"><div class="ico-label">Buy WIth</div><div class="ico-list">BTC, ETH, XRP, BNB, LTC, XLM, USDT, BCH, TRX, EOS</div></div><div class="tags"><div class="ico-label">ICO LOCATION</div><div class="ico-bold">Estonia</div></div></div><div class="ico-row"><div class="ico-side-head"><img src="https://topicolist.com/wp-content/themes/topicolist/images/details.svg" width="15" class="side-icon" alt="PointPay details"/><div>Restrictions</div><div class="sidebar-line"></div></div>
           
                  
				  <div class="tags"><div class="ico-label">KYC</div><div class="ico-bold">KYC Required</div>

					 

              </div><div class="tags"><div class="ico-label">Restricted Countries</div><div class="ico-list">Cuba, Iran, Lebanon, Syria, Libya, Sudan, Somalia and North Korea, Yemen</div></div></div>


			</aside>*/}

				</div>	
		  </div>
		</div>
	  );
	}
  }

