import React from "react";
import './list.css';

const List = ({ totalIncome }) => {
  return (
    <div>
      <div className="total-income">
        <p className="total-income-text">Total Price {totalIncome}$</p>
      </div>
    </div>
  );
};

export default List;
