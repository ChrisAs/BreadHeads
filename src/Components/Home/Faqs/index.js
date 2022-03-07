import "./index.css";

const Index = () => {
  return (
    <section id="faq" className="faqs_section">
      <img className="wheat-img" src={require("../../../assests/Wheat.png")} />
      <div className="row row-custom">
        <div className="col-lg-5">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
        </div>

        <div className="col-lg-7">
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                  What do I get if I mint a Bread Head NFT?
                </a>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                data-parent="#accordion"
              >
                <div class="card-body">Entry into the Bread Heads universe. This starts with your unique hand drawn NFT. Upon reaching roadmap milestones, the Bread Heads universe will expand both into an animated series, access to exclusive merchandise, and future airdrops.</div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  Why can’t I find the discord?
                </a>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body">For now, The Bread Heads’ discord is invite-only, so follow @the_breadheads on Twitter and turn on notifications. Certain NFT communities are invited as part of our ecosystem launch. </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  What is the supply and mint price?
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body">10,000 Bread Heads is the total supply of Bread Heads. 500 Bread Heads are being held for partnerships and the team. <br/ > Our mint price is 0.06E.</div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  What is the mint date?
                </a>
              </div>
              <div id="collapseFour" class="collapse" data-parent="#accordion">
                <div class="card-body">Our mint date is the 5th of March at 10:00AM UTC. Bread Heads will never have a stealth launch, please be careful of scams. Official launch details will be shared on our website, Discord, and our Twitter page.</div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseFive"
                >
                  How many Bread Heads can I mint?
                </a>
              </div>
              <div id="collapseFive" class="collapse" data-parent="#accordion">
                <div class="card-body">A maximum of 5 Bread Heads per Wheat List (WL) wallet.</div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseSix"
                >
                  What is the Bread Heads commercial license?
                </a>
              </div>
              <div id="collapseSix" class="collapse" data-parent="#accordion">
                <div class="card-body">Bread Heads are able to be used by their NFT owners for commercial works with revenue of up to $100,000USD annually. For projects/revenue with greater than $100,000USD, please get in contact with us so we can assist you.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
