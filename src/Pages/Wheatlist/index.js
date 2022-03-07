import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./index.css";

const { toChecksumAddress } = require("ethereum-checksum-address");

const Wheatlist = () => {
  const [walletAddress, setWalletAddress] = useState(null);


  async function checkWallet() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = toChecksumAddress(accounts[0])
    setWalletAddress(account);
    console.log(`Wallet is: ${account}.`);
    if(account){
      console.log("Checking if it is in the wheatlist");
      let fetchurl = `https://71y8z3oip3.execute-api.us-east-2.amazonaws.com/default/Wheatlist?address=${account}`;
      const url_response = await fetch(fetchurl);
      const state = await url_response.json();
    if (state) {
      alert(`Congratulations! Wallet: ${account} is wheatlisted!`)
    } else {
      alert(`Sorry! Your Wallet: ${account} is not wheatlisted!`)
    }
    }
  }

  return (
    <div className="hero-navbar">
      <div className="mint-overlay"></div>
      <div className="nabar-otr">
        <div className="container_mint_navbar">
          <div className="logo-otr">
            <img
              className="logo"
              src={require("../../assests/logo_small.png")}
              alt="logo"
              width={90}
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="hero-main">
        <div className="container">
          <div className="wrapper">
            <div className="bake-mint-otr">
              <span></span>
              <div className="bake-mint-text desc">Signin with your wallet, and see if it is wheatlisted!</div>
            </div>
            <div className="action">
              <button className="theme-btn" onClick={() => checkWallet()}>
                Check Wheatlist!
              </button>
            </div>
            <div><span className="mint_details_desc"></span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheatlist;
