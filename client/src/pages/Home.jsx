import FoodBankList from "../components/FoodBankList";
import FilterMenu from "../components/FilterMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <FilterMenu />
      <FoodBankList />
      
    </div>
  );
};

export default Home;
