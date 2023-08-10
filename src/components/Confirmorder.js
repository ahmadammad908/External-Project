import { addToCart } from "./cartSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function CartPage() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const cart = useSelector((state) => state.cart.value);
  return (
    <>
      {cart.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addToCart({
              id: 1,
              title: "Allah Ditta",
              description: text,
            })
          );
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add to cart</button>
      </form>

      {/* Tailwind Csssss  */}

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://th.bing.com/th/id/OIP.AM7MVNfQsNoyUkMiywzzuwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

// import { Link } from "react-router-dom";
// function reducer(state, action) {
//   switch (action.type) {
//     case "setEmail":
//       return { ...state, email: action.payload };
//     case "setPassword":
//       return { ...state, password: action.payload };
//     case "setConfirmPassword":
//       return { ...state, confirmPassword: action.payload };
//     case "addProvider":
//       return {
//         ...state,
//         providers: {
//           ...state.providers,
//           [action.payload.name]: action.payload.data,
//         },
//       };
//     case "removeProvider":
//       return () => {
//         delete state.providers[action.payload];
//         return state;
//       };
//     default:
//       return state;
//   }
// }
// export default function Confirmorder() {
//   const [state, dispatchState] = useReducer(reducer, {
//     email: "",
//     password: "",
//     confirmPassword: "",
//     providers: {
//       gmail: {},
//     },
//   });
//   const onChangeHandler = (actionType, value) =>
//     dispatchState({
//       type: actionType,
//       payload: value,
//     });
//   console.log("addProvider");
//   return (
//     <form>
//       <input
//         type="email"
//         value={state.email}
//         onChange={(e) => onChangeHandler("setEmail", e.target.value)}
//       ></input>
//       <input
//         type="password"
//         value={state.password}
//         onChange={(e) => onChangeHandler("setPassword", e.target.value)}
//       ></input>
//       <input
//         type="password"
//         value={state.confirmPassword}
//         onChange={(e) => onChangeHandler("setConfirmPassword", e.target.value)}
//       ></input>
//       <button
//         type="button"
//         onClick={() =>
//           dispatchState({
//             type: "addProvider",
//             payload: {
//               name: [state.email, state.password, state.confirmPassword],
//               data: {},
//             },
//           })
//         }
//       >
//         Add Provider
//       </button>
//       <button
//         type="button"
//         onClick={() =>
//           dispatchState({
//             type: "removeProvider",
//             payload: "google",
//           })
//         }
//       >
//         Remove Provider
//       </button>
//       {console.log(state.providers)}
//       <div>
//         {Object.entries(state.providers).map(([key, value]) => (
//           <button>Login with {key}</button>
//         ))}
//       </div>
//     </form>
//   );
// }
