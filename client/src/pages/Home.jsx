import ProductList from "../components/ProductList";
import FilterMenu from "../components/FilterMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <FilterMenu />
      <ProductList />
      
    </div>
  );
};

export default Home;
