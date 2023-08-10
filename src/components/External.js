import React, { useState, useContext, useEffect } from "react";
import cartContext from "./CartContext";
import useProduct from "./useProduct";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
//// 1:Todo Appp
/////2: Display Categories
/////3: Set Category on Select
/////4: Apply category filter
/////5: Inject categories with an "All" option
/////// 6. Fetch all products if "All" is selected

export default function ExternalSearch({ handleAddProduct }) {
  /////////
  const { getProducts, getProductByCategory, getProductCategories } =
    useProduct();

  const { productItems, setProductItems } = useContext(cartContext);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();

  const [skipProducts, setSkipProducts] = useState(0);

  const [externalSearch, setExternalSearch] = useState("");

  // const [rangeval, setRangeval] = useState(null);

  const [allCategories, setAllCategories] = useState([]);

  const [requestState, setRequestState] = useState("loading");

  const [products, setProducts] = useState(productItems);

  const [totalProducts, setTotalProducts] = useState(products.length);

  const totalPaginationItems = Math.ceil(totalProducts / 30);

  const [category, setCategory] = useState([]);

  ////////////// This codde is used By Pagination
  // useEffect(() => {
  //   getProducts({
  //     skip: skipProducts,
  //     onFailure: (error) => alert(JSON.stringify(error)),
  //     onSuccess: ({ total, products }) => {
  //       setProducts(products);
  //       setTotalProducts(total);
  //     },
  //   });
  // }, [skipProducts]);

  useEffect(() => {
    getProductCategories({
      onSuccess: (data) => {
        setAllCategories(data);
        setRequestState("loaded");
      },
      onFailure: (message) => {
        setRequestState("Failure");
      },
    });
  }, []);

  function onSubmitListener(e) {
    e.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${externalSearch}`)
      .then((res) => res.json())
      .then((data) => setProductItems(data.products));
  }

  function myFunction(e) {
    const { value } = e.target;
    setCategory(value);
    console.log("ffff", value);
    // function onSuccess(products) {
    //   setProductItems(products);
    // }
    // if (!value) {
    //   getProducts({
    //     onSuccess,
    //     onFailure: (error) => {},
    //   });
    //   return;
    // }
    // getProductByCategory({});
    console.log("fafa", value);
    if (value) {
      fetch(`https://dummyjson.com/products/category/${value}`)
        .then((res) => res.json())
        .then((data) => setProductItems(data.products))
        .catch((error) => console.table(error));
    } else {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => setProductItems(data.products))
        .catch((error) => console.table(error));
    }
  }

  console.log("Search Items", externalSearch);
  function myFunc() {
    alert("Your Item added in Cart");
  }
  return (
    <>
      <form onSubmit={onSubmitListener}>
        <input
          type="search"
          placeholder="Search External"
          name="search"
          onChange={(e) => setExternalSearch(e.target.value)}
        />
        <button
          type="submit"
          value={"submit"}
          style={{ border: "2px solid red" }}
        >
          Submit
        </button>
        {/* <input type="submit" value={"submit"}></input> */}
      </form>
      <select
        name="category"
        value={category}
        onChange={myFunction}
        id="search"
      >
        {/* <option value="">Chosse Category</option>
        <option value="smartphones">smartphones</option>
        <option value="laptops">laptops</option>
        <option value="fragrances">fragrances</option>
        <option value="skincare">skincare</option>
        <option value="groceries">groceries</option>
        <option value="home-decoration">home-decoration</option> */}
        <option value="">All</option>
        {allCategories.map((User) => (
          <option value={User}>{User}</option>
        ))}
      </select>
      <div>
        {/* <input
          type="range"
          className="custom-range"
          min="0"
          max="100"
          onChange={(event) => setRangeval(event.target.value)}
        /> */}
        {/*  */}
      </div>
      {/* etFilterd Products  The Products  */}
      {/* {products.length === 0 && (
        <div className="Loader">
          <h1>No Result Founds</h1>
        </div>
      )} */}
      {productItems.length === 0 && (
        <div className="Loader">
          <div className="Img"> </div>
          <div className="yet">
            <h1>There Is no Menu Yet</h1>
          </div>
        </div>
      )}
      {
        <div>
          <h1>{isAuthenticated && <img src={user.picture}></img>}</h1>

          <h1>{isAuthenticated && <h2>{user.name}</h2>}</h1>
        </div>
      }

      {/* {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )} */}

      {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}

      {/* // <button
      //   onClick={() =>
      //     logout({ logoutParams: { returnTo: window.location.origin } })
      //   }
      // >
      //   Log Out
      // </button> */}
      <Link to={"/signUp"} style={{ background: "black" }}>
        Sign Up
      </Link>

      {productItems.map((User) => (
        <div className="card">
          <img src={User.images}></img>
          <h3> {User.title} X</h3>
          <p> {User.price}</p>
          <button onClick={() => handleAddProduct(User)(myFunc())}>
            Add to Cart in Bucket
          </button>
        </div>
      ))}
      {/* {products.map((data) => (
        <div className="card">
          <img src={data.images}></img>
          <h3> {data.title} X</h3>
          <p> {data.price}</p>
          <button onClick={() => handleAddProduct(data)(myFunc())}>
            Add to Cart in Bucket
          </button>
        </div>
      ))} */}
      {/* <nav>
        <ul>
          {console.log({ skipProducts })}
          {[...Array(totalPaginationItems).keys()].map((item, key) => (
            <li key={key}>
              <button onClick={() => setSkipProducts(key * 30)}>
                {key + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav> */}
    </>
  );
}
