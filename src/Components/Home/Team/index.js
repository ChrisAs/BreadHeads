import "./index.css";
import manager from "../../../assests/manager-image.svg";
import team_image from "../../../assests/Team_image.svg";
import marketing_manager from "../../../assests/marketing-manager.svg";

import team1 from "../../../assests/Team/Wade.png";
import team2 from "../../../assests/Team/Mark.png";
import team3 from "../../../assests/Team/259.png";
import team4 from "../../../assests/Team/Seb.png";
import team5 from "../../../assests/Team/Craw.jpg";
import team6 from "../../../assests/Team/Speaker.png";
import team7 from "../../../assests/Team/Jmoneybags.png";
import team8 from "../../../assests/Team/AKDZ.png";
import team9 from "../../../assests/Team/EIVE.png";
import team10 from "../../../assests/Team/271.jpg";
import team11 from "../../../assests/Team/1877.jpg";
import team12 from "../../../assests/Team/not_bad_bread.jpg";
import team13 from "../../../assests/Team/Big_Ed.png";
import team14 from "../../../assests/Team/Desperado_Monkey.png";

const data = [
  {
    image_url: team1,
    handler: "@aizomeETH",
    name: "Wade Millican",
    designation: "Co-founder",
    link: "https://twitter.com/AizomeETH",
    description:
      "Founder and consultant across 4 different NFT projects. Works at Amazon managing ~60 engineers globally. Makes homebrew kombucha in spare time. Loves NY Bagels.",
  },
  {
    image_url: team2,
    handler: "@themanic_",
    name: "Mark Nicholson",
    designation: "Co-founder",
    link: "https://twitter.com/themanic_",
    description:
      "Director & co-founder of Stepmates Animation Studio. Devoted to producing beautiful and prolific content for film, television, and web3. Can’t stop eating carbs.",
  },
  {
    image_url: team3,
    handler: "@Mercurial__me",
    name: "Tim Ahmed",
    designation: "Lead Developer",
    link: "https://twitter.com/Mercurial__me",
    description:
      "Lead Developer and co-founder of 2 NFT projects. His contracts are among the best for security and gas optimizations. Started programming at 9, works as a Senior Developer. Interested in cars, planes, and crypto.",
  },
  {
    image_url: team4,
    handler: "@sebpeart",
    name: "Seb Peart",
    designation: "Creative Director",
    link: "https://twitter.com/sebpeart",
    description:
      "Animation Director with a passion for carbs. Directs a team of artists at Stepmates Animation Studios.  Ushering in animation to the NFT space.",
  },
  {
    image_url: team5,
    handler: "@CallumNoonan",
    name: "Callum Noonan",
    designation: "Lead Designer",
    link: "https://twitter.com/CallumNoonan",
    description:
      "An Australian artist with a wealth of experience working in animation, graphic design and as a commercial mural painter. Artistic director on multiple award winning shorts.",
  },
  {
    image_url: team6,
    handler: "@chappyboys",
    name: "Lachlan Wilson",
    designation: "Lead Designer",
    link: "https://twitter.com/chappyboys",
    description:
      "Raised on Ren & Stimpy and The Simpsons, MrSpeaker is a full-time character designer and artist in the animation industry. Watches his Saturday morning cartoons with a piece of Vegemite and butter on sourdough.",
  },
  {
    image_url: team7,
    handler: "@michaelides_j",
    name: "Jordan Michaelides",
    designation: "Strategy",
    link: "https://twitter.com/michaelides_j",
    description:
      "Talent Agency Owner, Podcast Host, and former TradFi Specialist, with a passion for the intersection of media and finance. Chewing someone’s ear off about DeFi in his spare time.",
  },
  {
    image_url: team8,
    handler: "@theakdeezy",
    name: "Alex Dubois",
    designation: "Program/Product Management",
    link: "https://twitter.com/theakdeezy",
    description:
      "Built products in Alexa, consumer and currently building in distribution tech at Amazon. Loves engaging about product management, sneakers and web3. Runs marathons & eats as much bread as he wants.",
  },
  {
    image_url: team9,
    handler: "@EIVE0101",
    name: "Carter Aronson",
    designation: "Marketing",
    link: "https://twitter.com/EIVE0101",
    description:
      "Sales and Ops leader in FinTech. In his spare time, he builds furniture, bakes sourdough with his daughter, and can be found running and biking with his dog, Della.",
  },
  {
    image_url: team10,
    handler: "@djSavage55",
    name: "on Twitter, YouTube and Twitch",
    designation: "Discord Manager",
    link: "https://twitter.com/djSavage55",
    description:
      "Twitch streamer & host on @LadzCityRadio where he interviews guests and talks about crypto, NFTs, and music. Has an MIS degree and 10+ years in IT support roles. Loves playing music and entertaining people!",
  },
  {
    image_url: team11,
    handler: "Topson",
    name: "Topson",
    designation: "Front End Developer",
    link: "https://twitter.com/opson",
    description:
      "Has been developing websites for multiple companies professionally for 3 years. Ambitious gamer. Got into Crypto in 2018 and has been building and investing ever since.",
  },
  {
    image_url: team12,
    handler: "@sassmate92",
    name: "Adam Turnbull",
    designation: "Community Lead",
    link: "https://twitter.com/sassmate92",
    description:
      "Musician, Amateur Audio Engineer, Avid Snowboarder, lover of home brewing, and all things cryptocurrency.",
  },
  {
    image_url: team13,
    handler: "@edcase_eth",
    name: "Ethan Case",
    designation: "Community Lead",
    link: "https://twitter.com/edcase_eth",
    description:
      "Studied elementary special education and worked as an ABA therapist. He is currently obtaining his insurance license in Michigan, USA. Lover of hip hop and comedy. Ask him about Kanye’s discography.",
  },
  {
    image_url: team14,
    handler: "@DesperadoMonkee",
    name: "DesperadoMonkee",
    designation: "Community Lead",
    link: "https://twitter.com/DesperadoMonkee",
    description:
      "Passionate artist in mediums including digital, 3d,  painting, and tattooing. Always loved technology and its evolution.  Passionately learning  programming to be a part of the evolution.",
  },
];

const Index = () => {
    return (
        <section id="team" className="team_section">
            <img className="wheat-img" src={require("../../../assests/Wheat.png")}/>
            <div className="team-inr">
                <div className="team-heading">Our Team</div>

                <div className="row row-team justify-content-center">
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="col-lg-3 col-md-4 col-sm-6 mb-5 col-team-otr"
                            >
                                <img src={item.image_url} style={{borderRadius: "50%", width: 170, height: 170}}/>
                                <div className="team-twiter-linkk"><a href={item.link}>{item.handler}</a></div>
                                <div style={{fontSize: 14, fontFamily : "Poppins-Regular", color: "#666161"}} className="team-name">{item.name}</div>
                                <div className="team-dsignation">{item.designation}</div>
                                <div className="team-desc">{item.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Index;
