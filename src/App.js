import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="padding-y container">
        <div className="row">
          <Filters />
          <Products />
        </div>
      </section>
    </div>
  );
}

export default App;
