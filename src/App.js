import logo from './logo.svg';
import './App.css';
import React,{ useEffect,useState } from 'react'
import Web3 from 'web3'
import Transaction from './build/contracts/transaction.json'
function App() {
  const [account, setAccount] = useState(0)
  const [contract, setContract] = useState(null)
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [inputIndex, setInputIndex] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputAddr, setAddr] = useState('');
  const [inputDelivPrice, setDelivPrice] = useState('');
  useEffect(()=>{
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          try {
              // Request account access if needed
              await window.ethereum.enable()
          } catch (error) {
            console.log(error)
              // User denied account access...
          }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
          
      }
      // Non-dapp browsers...
      else {
          alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    }, [])
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", loadBlockchainData)
    }

  })
  async function loadBlockchainData(){
    const accounts = await window.web3.eth.getAccounts()
    setAccount(accounts[0])
    const networkID = await window.web3.eth.net.getId()
    const networkData = Transaction.networks[networkID]
    if (networkData) {
      const Tranaction = new window.web3.eth.Contract(Transaction.abi,networkData.address)
      setContract(Tranaction);
      }
     else {
      alert('Transaction contract not deployed to network you are using!')
    }

  }
  async function createOrder(){
    let oNumber= input;
    let pName = input2;
    alert(oNumber);
    alert(pName);
    try {
      contract.methods.createorder(pName, oNumber).send({from:account})
    }catch (error) {
      console.log(error)
  return;
  }
}
  async function payforOrder(){
 alert("test0");
  }
 async function setOrderPrice() {
   let price_=inputPrice;
   alert(price_);
 }
 async function setOrderCourier(){
   let addr_=inputAddr;
   alert(addr_);
 }
 async function setDeliveryPrice(){
  let dprice_=inputDelivPrice;
  alert(dprice_);
 }
 async function confirmDelivery(){
   alert("test1");
 }
 async function getorderaddr(){
  try{
    let returnvalues= await contract.methods.buyer().call({from:account});
alert("test2");
alert(returnvalues)
}catch (error) {
 console.log(error)
return;
}
 }
 async function getorderselleraddr(){
   try{
       let returnvalues= await contract.methods.seller().call({from:account});
   alert("test3");
   alert(returnvalues)
   }catch (error) {
    console.log(error)
return;
}

 }
 async function getorderInfo(){
   try{
       alert ("test4")
   let returnvalues= await contract.methods.getOrderInfo(inputIndex).call({from:account})
   alert(returnvalues[0]);
   alert(returnvalues[1]);
   alert(returnvalues[2]);
   alert(returnvalues[3]);
   alert(returnvalues[4]);
   alert(returnvalues[5]);
   }catch (error) {
    console.log(error)
return;
 
 }
 }
  return(
      <React.Fragment>
    <h2>stuff</h2>
    <label for="ordernmb4">užsakymo indeksas</label>
    <input value={inputIndex} onInput={e => setInputIndex(e.target.value)}/>

   
    <br/>

    <h1>Pirkėjo funkcijos</h1>
    <label for="prodname">įveskite produktą</label>
    <input value={input2} onInput={e => setInput2(e.target.value)}/>
    <label for="prodkiek">įveskite kiekį</label>
    <input value={input} onInput={e => setInput(e.target.value)}/>
    <button id="createOrderB" onClick={createOrder}>create order</button>
    <br/>
    <button id="payforOrderB" onClick={payforOrder}>buy</button>
    <br/>

    <h1>Pardavėjo funkcijos</h1>
    <label for="kaina">užsakymo kaina</label>
    <input value={inputPrice} onInput={e => setInputPrice(e.target.value)}/>
    <button id="setOrderPriceB" onClick={setOrderPrice}>set price</button>
    <br/>
    <label for="cur">kurjerio adresas</label>
    <input value={inputAddr} onInput={e => setAddr(e.target.value)}/>
    <button id="setOrderaddr" onClick={setOrderCourier}>paskirti kurjerį</button>
    <br/>
    <label for="pkaina">Pristatymo kaina</label>
    <input value={inputDelivPrice} onInput={e => setDelivPrice(e.target.value)}/>
    <button id="setOrderDivPriceB" onClick={setDeliveryPrice}>set delivery price</button>
    <h1>kurjerio funkcijos</h1>
    <button id="confimDeliv" onClick={confirmDelivery}>set price</button>
    <br/>
    <h1>kitos funkcijos</h1>
    <button id="getaddr" onClick={getorderaddr}>buyer address</button>
    <br/>
    <button id="getaddr" onClick={getorderselleraddr}>seller address</button>
    <br/>
    <button id="getInfo" onClick={getorderInfo}>order info</button>
    <br/>


    

   

    </React.Fragment>
  )
  
  


  
  /*return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <code>alert("stuff")</code>
    </div>
  );*/
}

export default App;
