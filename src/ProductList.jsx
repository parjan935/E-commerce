import Product from "./Product.jsx";
import laptop from "./assets/laptop.jpg";
import headphones from "./assets/headphones.jpeg";
import smartphone from "./assets/smarrtphone.jpeg";
// import tablet from "./assets/tablet.jpeg";
// import smartwatch from "./assets/smartwatch.jpeg";
// import camera from "./assets/camera.jpeg";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function ProductList() {
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
        <div className=" ">
          <h1 className="text-center m-4">Products</h1>
          {/* <button className="btn btn-primary">Go to Cart</button> */}
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default ProductList;
