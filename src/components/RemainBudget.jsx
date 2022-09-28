import React, { useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const RemainBudget = () => {
  const { expenses, budget } = useContext(BudgetContext);

  const totalSpent = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  //  0 indicates the starting value
  // important

  // to change the display to red or green based on how much one has 
  const brokeNiggaBalance = totalSpent > budget ? 'bg-red-600' : 'bg-green-500'

  return (
    <div className={`bg-green-600 py-6 text-white flex items-center justify-between rounded-lg px-6 ${brokeNiggaBalance}`}>
      <span className="capitalize">Remaining: ${budget - totalSpent}</span>
    </div>
  );
};

export default RemainBudget;
