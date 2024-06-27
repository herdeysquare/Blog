// components/AmountQuantity.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAmount, addQuantity } from "./Actions";

const AmountQuantity = () => {
  const { amount, quantity } = useSelector((state) => state.amountQuantity); // Correctly destructure from state
  const dispatch = useDispatch();

  const handleAddAmount = () => {
    dispatch(addAmount(10)); // Add 10 to amount
  };

  const handleAddQuantity = () => {
    dispatch(addQuantity(1)); // Add 1 to quantity
  };

  return (
    <div>
      <h1>Amount: {amount}</h1>
      <h1>Quantity: {quantity}</h1>
      <button onClick={handleAddAmount}>Add Amount</button>
      <button onClick={handleAddQuantity}>Add Quantity</button>
    </div>
  );
};

export default AmountQuantity;
