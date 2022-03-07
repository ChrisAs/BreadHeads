import "./index.css";
import {BsTwitter} from "react-icons/bs";
import bean_head from '../../assests/logo_small.png'

const Index = () => {
    const links = [
        {
            label: "About Us ",
            sectionId: "about",
        },
        {
            label: "Team ",
            sectionId: "team",
        },
        {
            label: "FAQ",
            sectionId: "faq",
        },
    ];

    const scroll = (id) => {
        const titleElement = document.getElementById(id);
        titleElement.scrollIntoView({behavior: "smooth"});
    };
    return (
        <section className="footer_bg">
            <footer>
                <div className="cursor_pointer" onClick={() => scroll("main_header")}>
                    <img style={{width: 100}} src={bean_head}/>
                </div>

                <ul className="footer-ul">
                    {links.map((item, index) => {
                        return (
                            <li
                                className="footer-li"
                                onClick={() => scroll(item.sectionId)}
                                selected={item.sectionId.selected}
                            >
                                <a className="footer-linkk" key={index}>
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </footer>
        </section>
    );
};

export default Index;
