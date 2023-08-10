import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import Internal from "./InternalSearch";
import External from "./External";
import { AuthContext } from "./AuthContext";
import MenuLink from "./MenuLink";

const Header = ({ cartItems }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  // const { currentUser } = useContext(AuthContext);
  // const AuthRoute = ({ children }) => {
  //   return currentUser ? children : <Navigate to={"/login"} />;
  // };
  return (
    <div>
      <header className="header">
        <div>
          <ul>
            <h1>
              <Link to={"/"} className="Logo">
                Cart Shop
              </Link>
            </h1>
            <br></br>

            <br></br>
            <Link to={"/cart"}>
              <FaShoppingBag />
              <span className="cart-length">
                {cartItems.length === 0 ? "0" : cartItems.length}
              </span>
            </Link>
            <Link to={"/Internal"}>Internal</Link>
            <Link to={"/External"}>External</Link>
            {/* <h1>{currentUser.email}</h1> */}
            {/* <button onClick={handleLogout}>
              <MenuLink text={"logout"} />
            </button> */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
