import "./index.css";
import {BsTwitter} from "react-icons/bs";
import manager from '../../../assests/manager-image.svg'
import team_image from '../../../assests/Team_image.svg'
import marketing_manager from '../../../assests/marketing-manager.svg'

const images = [
    {
        url: require("../../../assests/1682.jpg"),
    },
    {
        url: require("../../../assests/1778.jpg"),
    },
    {
        url: require("../../../assests/1680.jpg"),
    },
    {
        url: require("../../../assests/1803.jpg"),
    },
];
const Index = () => {
    return (
        <section id="contact" className="joinGang_section">
            <img className="wheat-img" src={require("../../../assests/Wheat.png")}/>
            <div className="joingang-heading">We're All Going To Bake It</div>

            <div className="joingang-btn-otr">
            </div>

            <div className="row row-joingang">
                {images.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-sm-6 joingang-col"
                        >
                            <img className="joingang-img" key={index} src={item.url}/>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Index;
