const Filters = ({ categories }) => {
  return (
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
            <a
              href="#"
              className="title"
              data-bs-target="#collapse_aside_brands"
            >
              Brands
            </a>
          </header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              {categories.map((categ) => (
                <label className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={categ}
                  />
                  <span className="form-check-label">{categ}</span>
                </label>
              ))}
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="card-header">
            <a href="#" className="title" data-bs-target="#collapse_aside2">
              Price
            </a>
          </header>
          <div className="collapse show" id="collapse_aside2">
            <div className="card-body">
              <input type="range" className="form-range" min="0" max="100" />
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
  );
};

export default Filters;
