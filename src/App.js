import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Products from "./components/Products";
import items from "./items.json";
import categories from "./categories.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="padding-y container">
        <div className="row">
          <Filters categories={categories} />
          <Products items={items} />
        </div>
      </section>
    </div>
  );
}

export default App;
