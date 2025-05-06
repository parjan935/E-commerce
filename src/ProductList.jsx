import React, { useState } from "react";
import Product from "./Product.jsx";
import laptop from "./assets/laptop.jpg";
import headphones from "./assets/headphones.jpeg";
import smartphone from "./assets/smarrtphone.jpeg";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";

function ProductList() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );

      if (existingItemIndex !== -1) {
        // Clone the item to avoid direct mutation
        const updatedCart = [...prevCart];
        const existingItem = { ...updatedCart[existingItemIndex] };
        existingItem.quantity += 1;
        updatedCart[existingItemIndex] = existingItem;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const products = [
    { name: "Laptop", price: 899, image: laptop },
    { name: "Headphones", price: 199, image: headphones },
    { name: "Smartphone", price: 699, image: smartphone },
    { name: "Tablet", price: 499, image: smartphone },
    { name: "Smartwatch", price: 299, image: headphones },
    { name: "Camera", price: 599, image: laptop },
  ];

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Products</h1>
          <button className="btn btn-primary" onClick={() => setShowCart(true)}>
            Go to Cart ({cart.length})
          </button>
        </div>
        {showCart ? (
          <Cart items={cart} setItems={setCart} showCart={setShowCart} />
        ) : (
          ""
        )}

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              {/* <Product {...product} onAddToCart={handleAddToCart} /> */}
              <Product
                {...product}
                cart={cart}
                setCart={setCart}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
