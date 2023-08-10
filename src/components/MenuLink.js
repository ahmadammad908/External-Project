import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const MenuLink = ({ text }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h3 style={{ background: "blue" }}>{text}</h3>
      <h1> {text === "Logout" && `(${currentUser})`}</h1>
    </div>
  );
};

export default MenuLink;
