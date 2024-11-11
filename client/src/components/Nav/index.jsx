import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import '../../../src/index.css';

function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    transition: 'color 0.3s',
    boxShadow: '10px 10px 15px rgba(2, 0, 0, 0.47)'
  };

  const linkHoverStyle = {
    color: 'lightgreen',
  };

  return (
    <div>
      <header style={{
          backgroundColor: 'darkgreen',
          display: 'flex',
          alignItems: 'center',
          padding:'5px',
          position: 'relative',
          width: '100%',
          zIndex: '100',
          
        }}
        className="flex-row px-1"
      >
        
          <Link to="/" style={{linkStyle, fontSize:'40px' }}>
            <span role="img" aria-label="shopping bag">🤝</span>
            Community Crate
          </Link>
        

        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <ul className="flex-row" style={{ listStyle: 'none', gap: '1rem' }}>
            
             
            

            {/* Conditional rendering based on Auth status */}
            {Auth.loggedIn() ? (
              <>
                <li className="mx-1">
                  <Link to="/donationhistory" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = ''}>
                    Donation History
                  </Link>
                </li>
                <li className="mx-1">
                  <a href="/" onClick={() => Auth.logout()} style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = ''}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="mx-1">
                  <Link to="/signup" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = ''}>
                    Signup
                  </Link>
                </li>
                <li className="mx-1">
                  <Link to="/login" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = ''}>
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
