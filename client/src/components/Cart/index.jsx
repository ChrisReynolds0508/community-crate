import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Link } from "react-router-dom";
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    getCheckout({
      variables: { 
        products: [...state.cart],
      },
    });
  }

  if (!state.cartOpen) {
    return (
      <div  onClick={toggleCart}>
        <span  role="img" aria-label="trash">
        <img 
      src="../../images/donation.png"  // Update this path as needed
      alt="Donation Icon"
      style={{
        width: '35px',     // Adjust size to fit within the nav
        height: '35px',    // Adjust size to fit within the nav
        marginLeft: '25px' ,// Adjust spacing if needed
        marginRight: '25px', // Adjust spacing if needed
        marginTop: '10px',
        borderRadius: '50%',
        boxShadow: '10px 10px 15px rgba(2, 0, 0, 0.47)'

        
      }}
    />
    </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [X]
      </div>
      <h2>Donations</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Donate Now</button>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button>Login/signup to complete donation</button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <h3>
          No pending donations
        </h3>
      )}
    </div>
  );
};

export default Cart;
