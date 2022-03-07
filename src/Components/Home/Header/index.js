import "./index.css";
import bean_head_title from "../../../assests/bead-head-title.png";
import background from "../../../assests/IMG_2748.jpg";
import { BsTwitter } from "react-icons/bs";
import React from "react";
import bean_head from "../../../assests/logo_small.png";
import logo from "../../../assests/logo.png";

const Index = () => {
  return (
    <div className={"nav-header"}>
      <img className={"main-image"} src={background} alt={""} />
      <div className={"header-content"}>
        <a href="/mint" className="minting-now"><button className={"mint-button-home"}>Minting Now!</button></a>
        <button
          className={"twitter-follow-button"}
          onClick={() =>
            window.open("https://twitter.com/the_breadheads", "_blank")
          }
        >
          <span>
            <BsTwitter />
          </span>
          Twitter
        </button>
      </div>
    </div>
    // <div className="nav-header">
    //   <div style={{ margin: "0 auto" }}>
    //     <img src={logo} className={"logo-text"} />
    //   </div>
    //   <div className={"header-content"}>
    //     <button className={"mint-button"}>Coming Soon</button>
    //     <button
    //       className={"twitter-follow-button"}
    //       onClick={() =>
    //         window.open("https://twitter.com/the_breadheads", "_blank")
    //       }
    //     >
    //       <span>
    //         <BsTwitter />
    //       </span>
    //       Twitter
    //     </button>
    //   </div>
    // </div>
  );
};
export default Index;
