import React from "react";

const DomainSearch = () => {
  return (
    <div className="section-padding text-center" id="domain-search">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-lg-8 search-container">
            <h2>Build your online business</h2>
            <p className="mb-4">
              Lay a solid foundation for your business with a killer domain
              name.
            </p>

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

export default DomainSearch;
