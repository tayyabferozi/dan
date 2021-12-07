const BuySellDomains = () => {
  return (
    <div className="section-padding" id="buy-sell-domains">
      <div className="container-xl">
        <div className="row flex-md-row-reverse">
          <div className="col-md-6">
            <div className="right d-flex align-items-center">
              <img
                className="w-100"
                src="./assets/vectors/buyer.svg"
                alt="buyer"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="left">
              <h2>Buy and sell domains</h2>

              <p className="big">
                Dan is a marketplace for domain names. We make sure buying,
                selling and transferring domains goes smoothly and hassle-free.
              </p>

              <div className="features mb-5">
                <div className="item">
                  <div className="img"></div>
                  <div className="text">
                    <h4>Transparency first</h4>
                    <p>
                      No hidden costs. No complicated math. You’ll never be in
                      the dark, whether you’re buying or selling.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="img"></div>
                  <div className="text">
                    <h4>Effortless trading</h4>
                    <p>
                      By using state of the art technology, domain name trading
                      is super simple thanks to our easy-to-use platform.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="img"></div>
                  <div className="text">
                    <h4>Secure transactions</h4>
                    <p>
                      Security is important to us. Our fraud prevention team
                      monitors all transactions &amp; keeps you safe.
                    </p>
                  </div>
                </div>
              </div>
              <a className="btn btn-outlined primary lg with-next" href="#0">
                Get to know us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 96 96"
                  height="96px"
                  id="arrow_right"
                  version="1.1"
                  viewBox="0 0 96 96"
                  width="96px"
                >
                  <path d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellDomains;
