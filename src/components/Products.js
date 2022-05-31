const Products = ({ items }) => {
  return (
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
  );
};

export default Products;
