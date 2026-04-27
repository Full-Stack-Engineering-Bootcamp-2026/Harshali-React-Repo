import React from 'react'
import { useReducer } from 'react'

const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
        
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )

      let updatedItems

      if (existingItemIndex >= 0) {
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0
        )
      }
    }

    default:
      return state
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const products = [
    { id: 1, title: "iPhone 14", price: 79999 },
    { id: 2, title: "Samsung Galaxy S23", price: 74999 },
    { id: 3, title: "MacBook Air M2", price: 119999 },
    { id: 4, title: "Dell XPS 13", price: 99999 },
    { id: 5, title: "Sony Headphones", price: 19999 }
  ]

  return (
    <div>
      <h2>products</h2>

      {products.map(product => (
        <div key={product.id}>
          <h3>
            {product.title} - {product.price}
          </h3>

          <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
            Add to cart
          </button>
        </div>
      ))}

      <div>
        <h2>Shopping Cart</h2>

        {state.items.length === 0 ? (
          <p>your cart is empty</p>
        ) : (
          <div>
            {state.items.map(item => (
              <div key={item.id}>
                <p>
                  {item.title} - {item.price} * {item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}

        <h3>Total items: {state.totalItems}</h3>
        <h3>Total amount: {state.totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default ShoppingCart