import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ADDRESS, ABI } from "./config.js";
import "./index.css";
import backgroundimg from "../../assests/mintpage_breadheads.jpg";

const { toChecksumAddress } = require("ethereum-checksum-address");

const Mint = () => {
  const limit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  // FOR MINTING
  const [how_many_breadheads, set_how_many_breadheads] = useState(1);
  const [breadheadContract, setBreadheadContract] = useState(null);
  const [presaleToken, setpresaleToken] = useState(null);

  // INFO FROM SMART Contract
  const [totalSupply, setTotalSupply] = useState(0);
  const [saleStarted, setSaleStarted] = useState(false);
  const [presaleStarted, setpresaleStarted] = useState(false);
  const [breadheadPrice, setBreadheadPrice] = useState(0);

  useEffect(async () => {
    signIn();
  }, []);

  async function signIn() {
    if (typeof window.web3 !== "undefined") {
      window.web3 = new Web3(window.ethereum);
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum
      .enable()
      .then(function (accounts) {
        window.web3.eth.net
          .getNetworkType()
          // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
          .then((network) => {
            console.log("Network is: " + network);
            if (network != "main") {
              alert(
                "You are on " +
                  network +
                  " network. Change network to mainnet or you won't be able to do anything here"
              );
            }
          });
        let wallet = toChecksumAddress(accounts[0]);
        setWalletAddress(wallet);
        console.log("Wallet is: " + wallet);
        setSignedIn(true);
        getContractData(wallet);
      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error);
      });
  }

  async function signOut() {
    setSignedIn(false);
  }

  async function getContractData(wallet) {
    console.log("Getting Contract Data");
    const breadheadContract = new window.web3.eth.Contract(ABI, ADDRESS);
    setBreadheadContract(breadheadContract);
    const salebool = await breadheadContract.methods
      .isPublicSaleActive()
      .call();
    setSaleStarted(salebool);
    const presalebool = await breadheadContract.methods
      .isPresaleActive()
      .call();
    setpresaleStarted(presalebool);
    const totalSupply = await breadheadContract.methods.totalSupply().call();
    setTotalSupply(totalSupply);
    const breadheadPrice = await breadheadContract.methods.cost().call();
    setBreadheadPrice(breadheadPrice);
    console.log("Finished getContractData");
  }

  async function mintBreadhead(how_many_breadheads) {
    try {
      if (breadheadContract) {
        const price = Number(breadheadPrice) * how_many_breadheads;
        const gasAmount = await breadheadContract.methods
          .publicSaleMint(how_many_breadheads)
          .estimateGas({ from: walletAddress, value: price });
        console.log("estimated gas", gasAmount);
        console.log({ from: walletAddress, value: price });

        breadheadContract.methods
          .publicSaleMint(how_many_breadheads)
          .send({ from: walletAddress, value: price, gas: String(gasAmount) })
          .on("transactionHash", function (hash) {
            console.log("transactionHash", hash);
          });
      } else {
        alert("Wallet not connected!");
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  async function mintPresaleBreadhead(how_many_breadheads) {
    if (presaleStarted) {
      try {
        console.log("Presale started. Fetching Wheatlist token");
        let fetchurl = `https://50k8qy0bni.execute-api.us-east-2.amazonaws.com/default/timJStestlambda?address=${walletAddress}`;
        const response = await fetch(fetchurl);
        const sig = await response.json();
        const signature = sig.signature;
        const verified = signature !== "";
        if (verified) {
          console.log("Wallet is wheatlisted. Token is: ", sig.signature);
          setpresaleToken(signature);
          const price = Number(breadheadPrice) * how_many_breadheads;
          const gasAmount = await breadheadContract.methods
            .presaleMint(
              how_many_breadheads,
              signature.r,
              signature.s,
              signature.v
            )
            .estimateGas({ from: walletAddress, value: price });
          console.log("Estimated gas", gasAmount);
          console.log({ from: walletAddress, value: price });
          breadheadContract.methods
            .presaleMint(
              how_many_breadheads,
              signature.r,
              signature.s,
              signature.v
            )
            .send({ from: walletAddress, value: price, gas: String(gasAmount) })
            .on("transactionHash", function (hash) {
              console.log("transactionHash", hash);
            });
        } else {
          console.log(`Wallet ${walletAddress} is not wheatlisted!`);
          alert(`Wallet ${walletAddress} is not wheatlisted!`);
        }
      } catch (err) {
        alert(err);
        console.error(err);
      }
    }
  }
  return (
    <div className="hero-navbar-mint">
    <img className={"main-image-mint"} src={backgroundimg} alt={""} />
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
          <div
            className="connect-wallet"
            onClick={!signedIn ? signIn : signOut}
          >
            {!signedIn ? (
              <span>Connect Wallet</span>
            ) : (
              <span>{walletAddress}</span>
            )}
          </div>
        </div>
      </div>
      <div className="hero-main">
        <div className="container">
          {/* <Dapp /> */}

          <div className="wrapper">
            <h1 className="heading">
              FRESH BREAD HEADS, BAKING ( MINTING) NOW!
            </h1>
            <div className="row mint_details_container">
              <div className="row d-flex align-items-center justify-content-center w-100 mb-3">
                {/* <span className=" mint_details_desc pl-5 pr-5 ">
                  {presaleStarted ? "Presale is now on!" : "Presale is not on"}
                </span> */}

                <span className=" mint_details_desc d-flex align-items-center pl-5 pr-5">
                  Total Bread Heads Minted:&nbsp;{" "}
                  <span className="mint_details_desc">
                    {" "}
                    {!signedIn ? <>-</> : <>{totalSupply}</>} / 10000
                  </span>
                </span>
              </div>

              <div></div>
            </div>
            <div className="bake-mint-otr">
              <div className="bake-mint-text desc">Bake/Mint</div>
              <select
                className="box"
                onChange={(e) => set_how_many_breadheads(e.target.value)}                
              >
                {limit.map((limit, index) => {
                  return (
                    <option
                      value={limit}
                      defaultValue={limit === 3 ? true : false}
                      key={index}
                    >
                      {limit}
                    </option>
                  );
                })}
              </select>
              <div className="bake-mint-text2 desc">
                {(breadheadPrice * how_many_breadheads) / 10 ** 18} Eth + Gas
                {/* Bake Heads for {ethCount}ETH */}
              </div>
            </div>
            <div className="action">
              <button
                className="theme-btn"
                onClick={() => mintBreadhead(how_many_breadheads)}
              >
                Mint Bread Heads
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
