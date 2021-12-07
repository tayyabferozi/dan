const Hero = () => {
  return (
    <div id="hero">
      <div className="left-img"></div>
      <div className="right-img"></div>
      <div className="floor"></div>
      <div className="floor2"></div>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <h1>Claim your space in the digital world</h1>
          </div>

          <div className="col-12 d-flex justify-content-center search-container">
            <div className="large-search">
              <input type="text" placeholder="Think of a domain name" />

              <button className="search-btn">
                <img src="./assets/vectors/search.svg" alt="search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
