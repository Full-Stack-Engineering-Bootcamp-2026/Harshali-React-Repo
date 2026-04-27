import React from "react";

function Cart() {

  
  function CartItem() {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">

          
          <img
            className="h-20 w-20"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            alt="product"
          />

          
          <p className="font-medium">
            Apple iMac (2023)
          </p>

          
          <div className="flex items-center">
            <button>-</button>
            <input
              type="text"
              defaultValue={1}
              className="w-10 text-center"
            />
            <button>+</button>
          </div>

          
          <p className="font-bold">$1499</p>

        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>

      <section>
        <h2>Shopping Cart</h2>

    
        <CartItem />

      </section>
    </div>
  );
}

export default Cart;