import "./index.css";

const Index = () => {
    return (
        <section className="roadMap_section">
            <img className="wheat-img" src={require("../../../assests/Wheat.png")}/>
            <div className="roadmap-inr">
                <div className="rodmap-heading">ROADMAP</div>
                <div className="row row-roadmap">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr">
                        <img src={require("../../../assests/phase1.png")}/>
                        <div className="roadmap-card-heading">Phase 01</div>
                        <div className="roadmap-desc">Mint Begins<br/>Bread Heads begin baking.</div>
                        <img className="roadmap-arrow" src={require("../../../assests/roadmap-arrow.png")}/>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr mb-5">
                        <img src={require("../../../assests/phase2.png")}/>
                        <div className="roadmap-card-heading">Phase 02</div>
                        <div className="roadmap-desc">
                            50% Sold<br /> Merch activated. Webcomic series.
                        </div>
                        <img className="roadmap-arrow" src={require("../../../assests/roadmap-arrow.png")}/>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr mb-5">
                        <img src={require("../../../assests/phase3.png")}/>
                        <div className="roadmap-card-heading">Phase 03</div>
                        <div className="roadmap-desc">
                            75% Sold<br />5-minute short developed. <br /> Bread Heads Universe expands.
                        </div>
                        <img className="roadmap-arrow" src={require("../../../assests/roadmap-arrow.png")}/>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-roadmap-otr mb-5">
                        <img src={require("../../../assests/phase4.png")}/>
                        <div className="roadmap-card-heading">Phase 04</div>
                        <div className="roadmap-desc">
                            100% Sold<br />Fully Baked! Airdrops, Events, Season 2 Development.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
