import "./styles.css";
import AddProduct from "./components/AddProduct";
// import Products from "./components/Products";
import Pagination from "./components/Pagination";
import Product from "./components/Product";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <AddProduct />
      <Pagination />
      <Product />
      <Products />
    </div>
  );
}
export default App;
