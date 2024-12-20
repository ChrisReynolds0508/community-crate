import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_FOODBANKS,
} from '../utils/actions';
import { QUERY_FOODBANKS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_FOODBANKS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      const product = products.find((product) => product._id === id);

      const item = {
        image: product.image,
        name: product.name,
        description: product.description,
        _id: product._id,
        price: product.price,
        quantity: product.quantity,
      };

      setCurrentProduct(item);
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_FOODBANKS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_FOODBANKS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="container my-1">
          <Link to="/foodbanks">← Back to Food Banks</Link>

          <h2 ><strong>{currentProduct.name}</strong></h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToCart}><strong>Add Donation</strong></button>
            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            ><strong>
              Remove Donation
              </strong></button>
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={`/images/${currentProduct.image}`}
              alt={currentProduct.name}
            />
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
