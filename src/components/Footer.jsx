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

            <div className="d-flex">
              <a href="#0"></a>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
