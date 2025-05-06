function Product({ name, price, image }){
  
    return (
      <div className="card text-center p-3">
        <img src={image} alt={name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="text-muted">${price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    );
};

export default Product;