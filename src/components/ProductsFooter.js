const ProductsFooter = () => {
  return (
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
  );
};

export default ProductsFooter;
