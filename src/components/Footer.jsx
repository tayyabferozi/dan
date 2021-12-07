import React from "react";

const Footer = () => {
  return (
    <div className="section-padding" id="footer">
      <div className="container-xl">
        <div className="row">
          <div className="col-6 col-md-3">
            <h5>Services</h5>
            <div className="link">
              <a href="#0">Buy a domain</a>
            </div>
            <div className="link">
              <a href="#0">Sell your domain</a>
            </div>
            <div className="link">
              <a href="#0">API Partnership Program</a>
            </div>
            <div className="link">
              <a href="#0">Brokerage</a>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h5>Learn</h5>
            <div className="link">
              <a href="#0">News</a>
            </div>
            <div className="link">
              <a href="#0">Trust &amp; Security</a>
            </div>
            <div className="link">
              <a href="#0">Help center</a>
            </div>
            <div className="link">
              <a href="#0">Transaction explorer</a>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-5 mt-md-0">
            <h5>Company</h5>
            <div className="link">
              <a href="#0">Careers-We'are hiring!</a>
            </div>
            <div className="link">
              <a href="#0">Our story</a>
            </div>
            <div className="link">
              <a href="#0">Contact us</a>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-5 mt-md-0">
            <h5>Follow us</h5>

            <div className="d-flex" className="social">
              <a href="#0">
                <img src="./assets/images/twitter.png" alt="twitter" />
              </a>
              <a href="#0">
                <img src="./assets/images/d.png" alt="facebook" />
              </a>
              <a href="#0">
                <img src="./assets/images/linkedin.png" alt="facebook" />
              </a>
              <a href="#0">
                <img src="./assets/images/m.png" alt="m" />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="row legal">
          <div className="col-lg-10 text-center text-lg-start">
            <div className="caption">
              <a target="_blank" href="/privacy">
                Privacy policy
              </a>
              <span className="divider">·</span>
              <a target="_blank" href="/terms_of_use">
                Terms of use
              </a>
              <span className="divider">·</span>
              <a target="_blank" href="/disclaimer">
                Disclaimer
              </a>
              <span className="divider">·</span>
              <a target="_blank" href="/sitemap">
                Sitemap
              </a>
              <span className="divider">·</span>© 2021 Dan.com an Undeveloped BV
              subsidiary. All Rights Reserved.
            </div>
          </div>
          <div className="col-lg-2">
            <button>
              English{" "}
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 34.1 34.1"
                width="12px"
                style={{ transform: "rotate(180deg)", marginLeft: ".5rem" }}
              >
                <g>
                  <g>
                    <path
                      fill="#fff"
                      class="st0"
                      d="M34.1,9.5c0,0.5-0.2,1-0.6,1.4L18.4,26c-0.8,0.8-2,0.8-2.8,0L0.6,10.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0
			L17,21.8L30.7,8.1c0.8-0.8,2-0.8,2.8,0C33.9,8.5,34.1,9,34.1,9.5z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
