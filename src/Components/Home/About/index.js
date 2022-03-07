import "./index.css";
const Index = () => {
  return (
    <section id="about" className="about_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")} />
      <div className="row row-about">
        <div className="col-lg-5">
          <div className="about_card">
            <img
              className="about-img"
              src={require("../../../assests/888.jpeg")}
            />
            <div className="card-content">
              <div className="about-card-heading">Bread Head</div>
              <div className="mint-otr">
                <span className="mint-text">#888</span>
                {/* <button className="mint-btn">Mint Now</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-tag">About</div>
          <div className="about-heading">WHAT ARE BREAD HEADS</div>
          <div className="about-desc">
          Bread Heads is a collection of 10,000 wheat-based NFTs, baked on the Ethereum blockchain. This project aims to bring us all together, to discover our similarities, forget our differences, and to find hope in what makes us human. When we mint, we’re all gonna bake it. The Bread Head NFT is your entry into the Bread Heads Universe. Bread Heads will come to life with digital and physical activations.
          </div>
          <div className="bread-btn">
            <button className="buy_bread_heads">Coming soon!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
