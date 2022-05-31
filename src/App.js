import items from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3">
              <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                data-bs-target="#aside_filter"
              >
                Show filter
              </button>
              <div id="aside_filter" className="collapse card d-lg-block mb-5">
                <article className="filter-group">
                  <header className="card-header">
                    <a href="#" className="title">
                      Related items
                    </a>
                  </header>
                  <div className="collapse show" id="collapse_aside1">
                    <div className="card-body">
                      <ul className="list-menu">
                        <li>
                          <a href="#">Electronics </a>
                        </li>
                        <li>
                          <a href="#">Accessories </a>
                        </li>
                        <li>
                          <a href="#">Home items </a>
                        </li>
                        <li>
                          <a href="#">Men's clothing </a>
                        </li>
                        <li>
                          <a href="#">Interior items </a>
                        </li>
                        <li>
                          <a href="#">Magazines </a>
                        </li>
                        <li>
                          <a href="#">Category name </a>
                        </li>
                        <li>
                          <a href="#">Home items </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a href="#" className="title">
                      Brands
                    </a>
                  </header>
                  <div className="collapse show" id="collapse_aside_brands">
                    <div className="card-body">
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Mercedes </span>
                        <b className="badge rounded-pill bg-gray-dark float-end">
                          120
                        </b>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Toyota </span>
                        <b className="badge rounded-pill bg-gray-dark float-end">
                          15
                        </b>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Mitsubishi </span>
                        <b className="badge rounded-pill bg-gray-dark float-end">
                          35
                        </b>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Nissan </span>
                        <b className="badge rounded-pill bg-gray-dark float-end">
                          89
                        </b>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Honda </span>
                        <b className="badge rounded-pill bg-gray-dark float-end">
                          30
                        </b>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Honda accord </span>
                        <b className="badge rounded-pill bg-gray-dark float-end">
                          30
                        </b>
                      </label>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="#"
                      className="title"
                    >
                      Price
                    </a>
                  </header>
                  <div className="collapse show" id="collapse_aside2">
                    <div className="card-body">
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="100"
                      />
                      <div className="row mb-3">
                        <div className="col-6">
                          <label htmlFor="min" className="form-label">
                            Min
                          </label>
                          <input
                            className="form-control"
                            id="min"
                            placeholder="$0"
                            type="number"
                          />
                        </div>

                        <div className="col-6">
                          <label htmlFor="max" className="form-label">
                            Max
                          </label>
                          <input
                            className="form-control"
                            id="max"
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>
                      </div>
                      <button className="btn btn-light w-100" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">32 Items found </strong>
                <div className="ms-auto d-sm-flex align-items-center">
                  <select className="form-select d-inline-block w-auto me-1">
                    <option value="0">Best match</option>
                    <option value="1">Recommended</option>
                    <option value="2">High rated</option>
                    <option value="3">Randomly</option>
                  </select>
                  <div className="btn-group">
                    <a
                      href="#"
                      className="btn btn-light"
                      data-bs-toggle="tooltip"
                      title="List view"
                    >
                      <i className="fa fa-bars"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-light active"
                      data-bs-toggle="tooltip"
                      title="Grid view"
                    >
                      <i className="fa fa-th"></i>
                    </a>
                  </div>
                </div>
              </header>
              <div className="row">
                {items.map((item) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <figure className="card card-product-grid h-100">
                      <div className="img-wrap">
                        <img src={item.image} />
                      </div>
                      <figcaption className="info-wrap border-top">
                        <div className="price-wrap">
                          <strong className="price">${item.price}</strong>
                          <del className="price-old">
                            ${item.price + item.price * Math.random()}
                          </del>
                        </div>
                        <p className="title mb-2">{item.title}</p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>{" "}
                        <a href="#" className="btn btn-light btn-icon">
                          {" "}
                          <i className="fa fa-heart"></i>{" "}
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
              <footer className="d-flex mt-4">
                <div>
                  <a href="#" className="btn btn-light">
                    &laquo; Go back
                  </a>
                </div>
                <nav className="ms-3">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
