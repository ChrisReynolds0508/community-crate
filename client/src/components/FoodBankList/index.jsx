import { useEffect } from 'react';
import FoodBankItem from '../FoodBankItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_FOODBANKS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_FOODBANKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function FoodBankList() {
  const [state, dispatch] = useStoreContext();

  const { currentFilter } = state;

  const { loading, data } = useQuery(QUERY_FOODBANKS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_FOODBANKS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_FOODBANKS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentFilter) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.filter._id === currentFilter
    );
  }

  return (
    <div className="my-2">
      <h2>Food Banks to Crate:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <FoodBankItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default FoodBankList;
