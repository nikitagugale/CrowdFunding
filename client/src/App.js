import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyToken from "./contracts/MyToken.json";
import MyTokenSale from "./contracts/MyTokenSale.json";
import KycContract from "./contracts/KycContract.json";
import img2 from './Images/img2.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll,faFunnelDollar,faCommentsDollar,faCommentDollar,faCalendarWeek,faCertificate,faGlobe, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {faEthereum,faRavelry,faReplyd} from "@fortawesome/free-brands-svg-icons";
import { Doughnut} from 'react-chartjs-2';
import Web3 from 'web3';
//import getWeb3 from "./getWeb3";
import "./CSS/Main.css"
import "./App.css";



//popup graph data
const option ={
labels: ['Admin', 'Partner', 'BoardMember', 'Investor'],
datasets: [{
    label: 'Vesting Tokens',
    data: [12, 19, 3, 5,],
    backgroundColor: [
        'rgba(83, 51, 237, 1)',
        'rgba(44, 130, 201, 1)',
        'rgba(58, 83, 155, 1)',
        'rgba(197, 239, 247, 1)',
        
    ],
    borderColor: [
        'rgba(83, 51, 237, 1)',
        'rgba(44, 130, 201, 1)',
        'rgba(58, 83, 155, 1)',
        'rgba(197, 239, 247, 1)',
        
    ],
    borderWidth: 1
}]
}
class App extends Component {
 // state = { loaded: false, tokenSaleAddress:null, userTokens:0}; 
     /* 
    componentDidMount = async() => {
        try {
            // Get network provider and web3 instance.
            this.web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            this.accounts = await this.web3.eth.getAccounts();
           // console.log(this.accounts[0])

            
            this.networkId = await this.web3.eth.net.getId();
            //this.blockNumber = await this.web3.eth.getBlockNumber()
            
            
            // Get the contract instance.
            this.tokenInstance = new this.web3.eth.Contract(
                MyToken.abi,
                MyToken.networks[this.networkId] && MyToken.networks[this.networkId].address,
            );

            this.tokensaleInstance = new this.web3.eth.Contract(
                MyTokenSale.abi,
                MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,
            );

            this.kycInstance = new this.web3.eth.Contract(
                KycContract.abi,
                KycContract.networks[this.networkId] && KycContract.networks[this.networkId].address,
            );
           
            
            this.setState({ loaded: true, tokenSaleAddress: MyTokenSale.networks[this.networkId].address, transaction: this.transaction}, this.updateUserTokens); // app is fully loaded
            
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };
  */
    //to call below func. => react life-cycle method
    async componentWillMount() {
      await this.loadWeb3()
      await this.loadBlockchainData()
  }
    
    
    
    async loadWeb3(){
      //for ethereum browser
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        //for legacy browsers 
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        //for invalid response
    } else {
        window.alert("Non-ethereum browser detected")
    }
    }
    async loadBlockchainData(){
      const web3 = window.web3
        const accounts = await web3.eth.getAccounts() //load accounts
        this.setState({ account: accounts[0] }) //setting account => store a/c in state obj. in react
        const networkId = await web3.eth.net.getId();
        // Get the contract instance.
        const tokenInstance = new web3.eth.Contract(
          MyToken.abi,
          MyToken.networks[networkId] && MyToken.networks[networkId].address)
          this.setState({tokenInstance})
      //  const tx="0xABdaF9f004bC9766C4575CdEF5FAcAAB880C80Af"
      const tokensaleInstance = new web3.eth.Contract(
          MyTokenSale.abi, MyTokenSale.networks[networkId].address)
          this.setState({ tokensaleInstance })

      const kycInstance = new web3.eth.Contract(
          KycContract.abi,
          KycContract.networks[networkId] && KycContract.networks[networkId].address
      );this.setState({kycInstance })

      const balance = await tokenInstance.methods.balanceOf(this.state.account).call() //for checking balance
      console.log(balance);
      this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
    
      const transactions = await tokenInstance.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest' }, { from: this.state.account })
      this.setState({ transactions }) //this.setState({ contract}) //ES6



      this.setState({ loaded: true, tokenSaleAddress: MyTokenSale.networks[networkId].address}, 
        this.updateUserTokens); // app is fully loaded
    }


  
     
    
    constructor(props) {
      var today = new Date(),
     strm = (today.getMinutes()+0),
      edm = (today.getMinutes()+5),
      start = today.getDate() + '/' + (today.getMonth()+1) + '/' +today.getFullYear() + ',' +today.getHours() + ':' +today.getMinutes() + ':' + today.getSeconds(),
      end = (today.getDate()) + '/' + (today.getMonth()+1) + '/' +today.getFullYear() + ',' +today.getHours() + ':' + (today.getMinutes()+5) + ':' + today.getSeconds();
       
      super(props);
      this.state = {
       strm :strm,
        edm :edm,
        start: start,
        end: end,
        showPopup: false,
        account: '', //empty string in the beginning
        tokensaleInstance: null, //no deployed contract initially
        balance: 0, //initial supply to zero
        transactions: [] //empty color array
      }
      this.transfer = this.transfer.bind(this)
      }
      togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
      }
      transfer(recipient, amount) {
        this.state.tokensaleInstance.methods.transfer(recipient, amount).send({ from: this.state.account })
    }
      
      //handle user address for kyc whitelisting
    handleInputChange = (event)=>{
      const target = event.target;
      const value = target.type ==="checkbox" ? target.checked :target.value;
      const name = target.name;

      this.setState({
          [name]:value  //here [name] = kycAddress and value = user a/c address
      })
  }
  //handle kyc whitelisting functionality
  handleKycWhitelisting = async() =>{
      //                                     user a/c address            contract deployer/owner address
      await this.state.kycInstance.methods.setKycCompleted(this.state.kycAddress).send({from: this.state.account})
      alert("Kyc for "+this.state.kycAddress+"Is Completed!!")
  }
    copyclipboard() {
      /* Get the text field */
      var copyText = document.getElementById("owneraddress");
    
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
      /* Copy the text inside the text field */
      document.execCommand("copy");
    
      /* Alert the copied text
      alert("Copied the text: " + copyText.value); */
    }
    //update token here
    updateUserTokens = async() =>{
        let userTokens = await this.state.tokenInstance.methods.balanceOf(this.state.account).call()
        this.setState({userTokens : userTokens})
    }
    //listen to token transfer
    listenTokenTransfer = async() =>{
        this.tokenInstance.events.Trasfer({to: this.accounts[0]}).on("data",this.updateUserTokens)
    }
    //handle buyToken here
    handleBuyTokens = async() =>{
      var t = new Date();
     console.log(this.state.strm);
      console.log(this.state.edm);
       //  54                59
       console.log(t.getMinutes())
      if(t.getMinutes() >= this.state.strm && t.getMinutes() < this.state.edm)
      await this.state.tokensaleInstance.methods.buyTokens(this.state.account).send({from: this.state.account, value: window.web3.utils.toWei("1","wei")})
      else
        alert("Timed Out")
     
    }
     handleRefund= async()=> {
      var r = window.confirm("Are you sure you want to refund?");
      if (r === true) 
        {console.log("You Pressed Ok!")
      //  await this.tokenInstance.methods.refund(this.accounts[0]).send({from: this.accounts[0], value: this.web3.utils.toWei("1","wei")})
      } 

      else { console.log( "You pressed Cancel!")}
}
    
  render() {
    
    return (
      
      <div className="App">

      <nav id="nav" class="navbar fixed-top navbar-toggleable-sm" data-spy="affix">
			<div class="container"> <a href="/" class="navbar-brand">Snapper</a>
					
			</div>
		</nav>

	<section id="slideshow" style={{height: "150px", backgroundImage: `url(${img2})`}}>
		

		<section id="content">
			
			<h3>Let's Invest And Grow Together</h3>

		</section>

		
	

	</section>

	<div class="container" id="activeico">
		
		
					<br></br>
					<div class="card text-center border-primary mb-3">
  						<div class="card-header border-primary mb-3">
							<center><h3 style={{color: "blue"}}>Snapper</h3></center>
  						</div>
 						 <div class="card-body">
    					{/*	<h5 class="card-title">Snapper</h5>*/}
    						<p class="card-text">Snapper Future Tech is a global services & technology products company, leading digital transformation for enterprises using blockchain. It offers services in Blockchain application development, training & consulting and an innovative suite of specialised products for e-Governance, Financial Services, Insurance, Sustainable Supply Chain & Healthcare. Established in 2017 in Pune, Snapper Future Tech has raised Pre-Seed and Seed rounds through Enemtech Capital and strategic investors globally. A Hyperledger Certified Service Provider (HCSP) & Training partner (HTP), the company participates in open-source initiatives across the globe & has robust technological alliances & partnerships with Hyperledger, Oracle, Amazon Web Services, IBM, Trust over IP & Sovrin.</p>
    						<ul><center><a href="/" class="btn btn-outline-primary" onClick = {this.handleBuyTokens}>Buy now</a>
							<button class="btn btn-outline-primary" style={{marginLeft:"5px"}} onClick={this.togglePopup.bind(this)}>About Token</button></center></ul>
  						</div>
  						<div class="card-footer  border-primary mb-3">
							<center><small>Start date :<b> {this.state.start}</b>        End date: <b>{this.state.end}</b></small></center>
  						</div>
					</div>
    </div>
        <br></br> 
  <section id="func" style={{borderRadius:"3px" , boxShadow:" 0 0 5px 0 rgb(0 0 0 / 10%)"}}>
       <div class="row">
       <div id="admin" style={{width:"50%",borderRadius:"3px" , boxShadow:" 0 0 5px 0 rgb(0 0 0 / 10%)",float:"left"}}>
          <h4>KYC Whitelisting</h4>
                <div class="form-inline justify-content-center">
                   <label class=" mb-2 my-2 my-sm-0"> Address To Allow : </label>
                    <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0"  style={{width:"300px"}} name ="kycAddress" placeholder="Enter Address here" value={this.state.kycAddress} onChange = {this.handleInputChange}></input>
                    <button class="btn btn-primary mb-2  my-2 my-sm-0" type="submit" onClick = {this.handleKycWhitelisting}>Add to Whitelist</button>
                </div>
                <br></br>
                <div class="form-inline justify-content-center">
                  Snapper Balance : {this.state.balance}
                </div>
                <br></br>
                <h4>Refund Ethers</h4>   
                <div class="form-inline justify-content-center">
               <button class="btn btn-primary mb-2  my-2 my-sm-0" type="submit" onClick={this.handleRefund}>Refund</button>
                </div>
                <br></br> 
        
          
        </div>
                
                <div id="inv" style={{width:"50%" ,borderRadius:"3px" , boxShadow:" 0 0 5px 0 rgb(0 0 0 / 10%)",float:"left"}}>        
                  <h3>For Buying More Token</h3>
                      <div class = "form-inline justify-content-center">         
                        <label class=" mb-2 my-2 my-sm-0">EOA Address : </label>
                            <div>
                                <input type="text" id="owneraddress" name="owneraddress" class="form-control mb-2 mr-sm-2 mb-sm-0" style={{ width:"400px",backgroundColor:"transparent", border:"none", borderBottom:"1px solid blue"}} value= {this.state.tokenSaleAddress} readOnly/>
                             
                                  <button class="btn btn-primary" type="button" onClick={this.copyclipboard}>copy</button>
                             
                            </div> 
                        </div>
                      <div class = " justify-content-center">
                       {/* <label class=" mb-2 my-2 my-sm-0"><h3>You currently have  :{this.state.userTokens} Tokens</h3> </label> */}
                          <br></br>
                        <button class="btn btn-primary mb-2  my-2 my-sm-0" type="button" onClick = {this.handleBuyTokens}>Buy Tokens Now</button>
                        </div>
                  </div>
         </div> 
         <br></br>
  </section>
  <section>
  <div class="h1 text-primary"> Transaction Logs</div>
        
      {/*  <div class="table-responsive">
              <table class="table caption-top">
                      
              <thead>
                <tr>
                <th scope="col">#</th>
                  <th scope="col">Account</th>
                  <th scope="col">No. Of Tokens</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                <th scope="row">1</th>
                  <td><input type="text" id="owneraddress" name="owneraddress" class="form-control border-0" value= {this.accounts} readOnly/>
                  </td>
                  <td style={{color:"green"}}>{this.state.userTokens}</td>
                </tr>
              </tbody>
            </table>
              
    </div>*/}
  <div >
                <div class="table-responsive">
              <table class="table caption-top">
              
                    <thead>
                        <tr>
                            <th>Recipient</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>No. Tokens</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map((tx, index) => {
                            return (
                                <tr key={index}>
                                    <td>{tx.returnValues.to}</td>
                                    <td>{this.state.tokenSaleAddress}</td>
                                    <td>{window.web3.utils.fromWei(tx.returnValues.value.toString(), 'Ether')}</td>
                                    <td style={{color:"green"}}>{this.state.userTokens}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div >









  </section>
  <br></br>
    <footer>
		
		<img id="logo" src="img/logo.png" alt='...'></img>

		<p id="footer">© Copyright 2021. All Rights Reserved. | Crowd Funding</p>

	</footer>  
	{this.state.showPopup ? 
    <Popup closePopup={this.togglePopup.bind(this)}/>
    : null
  }   
          














      
       

      </div>
  //  </Router>
    );
  }
}
//About Tokens
class Popup extends React.Component {
	render() {
	  return (
		<div className='popup'>
		  <div className='popup_inner'>
		  <div class="h1 text-primary"> About Token</div>
      <div class="row">
      <div style={{width:"50%",borderRadius:"3px",boxShadow: "0 0 5px 0 rgb(0 0 0 / 10%)",float:"left"}}>
		  <div class="table-responsive">
            <table class="table caption-top">
                    <thead>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faCalendarWeek} />  </th>
                        <th scope="row">Start : 27/04/2021 <br></br>End : 28/04/2021</th>
                        </tr>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faEthereum} />  Token Name</th>
                        <th scope="row">Snapper Coin</th>
                    </tr>
					<tr>
                        <th scope="row"><FontAwesomeIcon icon={faEthereum} />  Token Symbol</th>
                        <th scope="row">SNC</th>
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
        </div> 
        <div  style={{width :"50%",float:"left"}}>
          
        <Doughnut
          data={option}
          options={{
            title:{
              display:true,
              text:'Westing of Tokens',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
     
          />
    </div>
         </div> 
         
			<span className="close-icon" onClick={this.props.closePopup}>x</span>

      </div>
      </div>
		  
	  );
	}
  }



              
          



export default App;
//export {setState, componentDidMount};
