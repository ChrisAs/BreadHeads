import "./index.css";
import {BsTwitter} from "react-icons/bs";
import bean_head from '../../../assests/logo_small.png'
import React from "react";

const images = [
    {
        url: require("../../../assests/TR10_copy.jpg"),
    },
    {
        url: require("../../../assests/TR07.jpg"),
    },
    {
        url: require("../../../assests/TR08.jpg"),
    },
    {
        url: require("../../../assests/website_4.jpg"),
    },
];

const Index = () => {
    return (
        <section className="follow_section">
            <img className="wheat-img" src={require("../../../assests/Wheat.png")}/>
            <div className="row hero-row">
                <div className="col-lg-6 hero-content-otr">
                    <div className="hero-heading">ALL ARE WELCOME</div>

                    <div className="hero-desc">
                    Humans have been baking and eating bread for over 10,000 years. Simple in its composition, bread can be made with only grain and water, yet it’s powerful in its ability to fill bellies and sustain life. Bread, in some form, exists in every country in the world, in every culture. It’s universal. It’s inclusive. All Bread Heads are welcome here. 
                    </div>

                </div>
                <div className="col-lg-6 col-img-otr">
                    <div className="col-img-inr">
                        {images.map((item) => {
                            return <img className="hero-img" src={item.url}/>;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
