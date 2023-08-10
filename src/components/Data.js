import React from "react";
import { useState, useEffect } from "react";
let useData = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, []);
  console.log(items);
  return { items, setItems };
};
export default useData;

/*const data = {
  productItems: [
    {
      id: "1",
      name: "Pizza Burger",
      price: 230,
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "2",
      name: "Pizza",
      price: 900,
      image:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "3",
      name: "Spring Roll",
      price: 500,
      image:
        "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "4",
      name: "Sushi",
      price: 800,
      image:
        "https://images.pexels.com/photos/4553376/pexels-photo-4553376.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ],
};
export default data;*/
