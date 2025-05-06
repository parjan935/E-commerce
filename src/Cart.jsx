import React from "react";

const Cart = ({ items, setItems, showCart }) => {
  const incrementQty = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      quantity: updatedItems[index].quantity + 1,
    };
    setItems(updatedItems);
  };

  const decrementQty = (index) => {
    const updatedItems = [...items];
    const currentQty = updatedItems[index].quantity;

    if (currentQty === 1) {
      // Remove item from cart
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        quantity: currentQty - 1,
      };
    }

    setItems(updatedItems);
  };

  return (
    <div className="container my-4 border rounded shadow-sm bg-white">
      <div className="p-4 ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Your Cart</h2>
          <button
            className="btn btn-outline-danger"
            onClick={() => showCart(false)}
          >
            close
          </button>
        </div>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {items.map((item, index) => (
              <div
                className="d-flex align-items-center mb-3 border-bottom pb-2"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="me-3"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div className="flex-grow-1 fw-semibold">{item.name}</div>

                <button
                  className="btn btn-warning me-2"
                  onClick={() => decrementQty(index)}
                >
                  –
                </button>
                <div className="px-2">{item.quantity}</div>
                <button
                  className="btn btn-success ms-2"
                  onClick={() => incrementQty(index)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-end">
          <button className="btn btn-success">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
