import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const storedAdminStatus = localStorage.getItem("isAdmin");
    if (storedAdminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    const adminId = prompt("Enter admin ID:");
    const password = prompt("Enter password:");

    if (adminId === "admin" && password === "adminpassword") {
      setIsAdmin(true);
      // Store admin status in localStorage
      localStorage.setItem("isAdmin", "true");
    } else {
      alert("Invalid credentials. Only admins can access this link.");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Blogs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             <li className="nav-item">
                 {isAdmin ? (
              <Link className="nav-link" to="Blogupload"  >
                Blogupload
              </Link>
            ) : (
              <Link className="nav-link" to="/" onClick={handleLogin}>
                only for admin
              </Link>
            )}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>    
            </ul>            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
