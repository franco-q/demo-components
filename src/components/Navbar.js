import React from "react";

const Navbar = () => {
  return (
    <header className="section-header">
      <section className="header-main bg-warning bg-gradient">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-2 col-sm-4 col-4">
              <a href="/" className="navbar-brand">
                <i class="fab fa-amazon"></i>
              </a>
            </div>
            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="float-end">
                <a href="#" className="btn btn-light mx-2">
                  <i className="fa fa-user"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline-block">
                    Sign in{" "}
                  </span>
                </a>
                <a href="#" className="btn btn-light position-relative mx-2">
                  <i className="fa fa-heart"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline-block">
                    Wishlist
                  </span>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ zIndex: 9 }}
                  >
                    99
                  </span>
                </a>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvas_cart"
                  className="btn btn-light position-relative mx-2"
                >
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="ms-1">My cart </span>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ zIndex: 9 }}
                  >
                    99+
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <form action="#" className="">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
