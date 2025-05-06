import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ProductList from "./ProductList.jsx";
import Contactus from "./Contactus.jsx";
import { Link } from "react-router-dom";
// import './styles.css'; // Import the CSS file

function Homepage() {
  return (
    <>
      <Header />
      <div className="bg-light text-center p-5">
        <h2 className="display-4">Welcome to E-commerce</h2>
        <p className="text-secondary">Your one-stop shop for everything!</p>
      </div>
      <div id="body" className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              We are a leading e-commerce platform providing a wide range of products to meet all your needs. Our mission is to offer the best products at competitive prices with exceptional customer service.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Services</h3>
            <p>
              We offer a variety of services including fast shipping, easy returns, and 24/7 customer support. Shop with us and experience the best in online shopping.
            </p>
          </div>
        </div>
        <div className="text-center my-4">
          <Link to="/products" className="btn btn-primary">
            Go to Products
          </Link>
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;