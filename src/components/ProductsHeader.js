const ProductsHeader = () => {
  return (
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
  );
};

export default ProductsHeader;
