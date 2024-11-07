import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";
function Nav() {
  return (
    <div>
      <header style={{
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          padding:'5px',
          position: 'fixed',
          width: '100%',
          zIndex: '100',
        }}
        className="flex-row px-1"
      >
        
          <Link to="/" style={{ textDecoration: 'none' ,fontSize:'40px'}}>
            <span role="img" aria-label="shopping bag">🤝</span>
            Community Crate
          </Link>
        

        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <ul className="flex-row" style={{ listStyle: 'none',gap: '1rem'  }}>
            <li className="mx-1">
              <Link to="/foodbanks" style={{ textDecoration: 'none' }}>
                Food Banks
              </Link>
            </li>

            {/* Conditional rendering based on Auth status */}
            {Auth.loggedIn() ? (
              <>
                <li className="mx-1">
                  <Link to="/donationhistory" style={{ textDecoration: 'none' }}>
                    Donation History
                  </Link>
                </li>
                <li className="mx-1">
                  <a href="/" onClick={() => Auth.logout()} style={{ textDecoration: 'none' }}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="mx-1">
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    Signup
                  </Link>
                </li>
                <li className="mx-1">
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Login
                  </Link>
                </li>
              </>
            )}

          </ul>
        </nav>
        <Cart />
      </header>
    </div>
  );
}
 


export default Nav;
