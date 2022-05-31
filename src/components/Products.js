import Card from "./Card";
import ProductsFooter from "./ProductsFooter";
import ProductsHeader from "./ProductsHeader";

const Products = ({ addItemToCart, addItemToWishList, items }) => {
  return (
    <main className="col-lg-9">
      <ProductsHeader />
      <div className="row">
        {items.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
            <Card
              image={item.image}
              title={item.title}
              price={item.price}
              onClickAddToCart={() => {
                addItemToCart(item);
              }}
              onClickAddToWishList={() => {
                addItemToWishList(item);
              }}
            />
          </div>
        ))}
      </div>
      <ProductsFooter />
    </main>
  );
};

export default Products;
