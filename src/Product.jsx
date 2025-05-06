function Product({ name, price, image, onAddToCart, cart, setCart }) {
  const cartItem = cart.find((item) => item.name === name);

  const increment = () => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = () => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="card text-center p-3">
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="text-muted">${price}</p>

        {cartItem ? (
          <div className="d-flex justify-content-center align-items-center ">
            <button className="btn btn-primary" onClick={decrement}>
              -
            </button>
            <span className="px-3  ">{cartItem.quantity}</span>
            <button className="btn btn-primary " onClick={increment}>
              +
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart({ name, price, image })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
