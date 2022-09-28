import React, { useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const TotalExpenses = () => {

  const {expenses} = useContext(BudgetContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)
  //  0 indicates the starting value
  // important


  return (
    <div className="bg-purple-500 py-6 text-white flex items-center justify-between px-6 rounded-lg">
      <span className="capitalize">total spent: ${totalExpenses} </span>
    </div>
  );
};

export default TotalExpenses;
