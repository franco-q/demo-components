const Card = ({
  image,
  title,
  price,
  onClickAddToCart,
  onClickAddToWishList,
}) => {
  return (
    <figure className="card card-product-grid h-100">
      <div className="img-wrap">
        <img src={image} alt={title} />
      </div>
      <figcaption className="info-wrap border-top">
        <div className="price-wrap">
          <strong className="price">${price}</strong>
          <del className="price-old">${price * 1.2}</del>
        </div>
        <p className="title mb-2">{title}</p>
        <a
          href="#"
          className="btn btn-primary me-1"
          onClick={(e) => {
            e.preventDefault();
            onClickAddToCart();
          }}
        >
          Add to cart
        </a>
        <a
          href="#"
          className="btn btn-light btn-icon"
          onClick={(e) => {
            e.preventDefault();
            onClickAddToWishList();
          }}
        >
          <i className="fa fa-heart"></i>
        </a>
      </figcaption>
    </figure>
  );
};

export default Card;
