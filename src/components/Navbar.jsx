import { useEffect } from "react";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    // $("#navbar .nav-item.menu").click(function () {
    //   $(this).addClass("active");
    // });

    const menus = document.querySelectorAll(".menu");

    // console.log(menus);

    if (menus) {
      menus.forEach((menu) => {
        menu.addEventListener("click", function (e) {
          menus.forEach((el) => el.classList.remove("active"));
          this.classList.add("active");
        });
      });
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches(".menu-toggler")) {
        var dropdowns = document.getElementsByClassName("menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("active")) {
            openDropdown.classList.remove("active");
          }
        }
      }
    };

    $(".navbar-toggler").click(function () {
      $("#navbar").toggleClass("active");
      $("#menu-sm").slideToggle();
    });

    $(".menu-sm").click(function () {
      $(this).toggleClass("active");
      $(this).children(".menu-content").slideToggle();
    });
  }, []);

  return (
    <>
      <div id="navbar" className="">
        <div className="logo">
          <a href="#0" className="logo-main"></a>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a href="#0">Buy a domain</a>
          </li>
          <li className="nav-item">
            <a href="#0">Sell your domain</a>
          </li>
          <li className="nav-item menu">
            <button className="menu-toggler">
              Learn
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 34.1 34.1"
              >
                <g>
                  <g>
                    <path
                      class="st0"
                      d="M34.1,9.5c0,0.5-0.2,1-0.6,1.4L18.4,26c-0.8,0.8-2,0.8-2.8,0L0.6,10.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0
			L17,21.8L30.7,8.1c0.8-0.8,2-0.8,2.8,0C33.9,8.5,34.1,9,34.1,9.5z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <div className="menu-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">News</a>
                      <p>
                        Learn more about the company, PR and product updates
                        here.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">Trust &amp; Security</a>
                      <p>Connects you to the latest information on security</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">Help center</a>
                      <p>Learn how to configure, and use Dan.com products</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">Transaction explorer</a>
                      <p>
                        Find out if a domain is under an active rent or lease
                        contract or how many owners a domain has
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item menu">
            <button className="menu-toggler">
              Company
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 34.1 34.1"
              >
                <g>
                  <g>
                    <path
                      class="st0"
                      d="M34.1,9.5c0,0.5-0.2,1-0.6,1.4L18.4,26c-0.8,0.8-2,0.8-2.8,0L0.6,10.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0
			L17,21.8L30.7,8.1c0.8-0.8,2-0.8,2.8,0C33.9,8.5,34.1,9,34.1,9.5z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <div className="menu-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">Our story</a>
                      <p>
                        We’re on a mission to make domain name trading available
                        to everyone
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">API Partnership Program</a>
                      <p>Use our APIs to integrate with your services</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">Careers – We’re hiring!</a>
                      <p>
                        At Dan, we work, grow and build fast. Shaking up the
                        industry and making a splash
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <a href="#0">Contact us</a>
                      <p>
                        Didn’t find the information you’re looking for? Reach
                        out to our team! Our team is friendly, knowledgeable
                        &amp; ready to assist!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="account">
          <a className="btn btn-outlined" href="#0">
            Login
          </a>
        </div>
        <button class="navbar-toggler" data-target="#mobile-nav">
          <span class="top-bar bar"></span>
          <span class="bottom-bar bar"></span>
        </button>
      </div>
      <div id="menu-sm" style={{ display: "none" }}>
        <ul>
          <li className="item">
            <a href="#0">Buy a domain</a>
          </li>
          <li className="item">
            <a href="#0">Sell your domain</a>
          </li>
          <li className="item menu-sm">
            <button className="menu-toggler">
              Learn <img src="./assets/vectors/arrow.svg" alt="arrow" />
            </button>
            <div className="menu-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">News</a>
                      <p>
                        Learn more about the company, PR and product updates
                        here.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">Trust &amp; Security</a>
                      <p>Connects you to the latest information on security</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">Help center</a>
                      <p>Learn how to configure, and use Dan.com products</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">Transaction explorer</a>
                      <p>
                        Find out if a domain is under an active rent or lease
                        contract or how many owners a domain has
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="item menu-sm">
            <button className="menu-toggler">
              Company <img src="./assets/vectors/arrow.svg" alt="arrow" />
            </button>
            <div className="menu-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">Our story</a>
                      <p>
                        We’re on a mission to make domain name trading available
                        to everyone
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">API Partnership Program</a>
                      <p>Use our APIs to integrate with your services</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">Careers – We’re hiring!</a>
                      <p>
                        At Dan, we work, grow and build fast. Shaking up the
                        industry and making a splash
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <a href="#0">Contact us</a>
                      <p>
                        Didn’t find the information you’re looking for? Reach
                        out to our team! Our team is friendly, knowledgeable
                        &amp; ready to assist!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="item">
            <a href="#0">Login</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
