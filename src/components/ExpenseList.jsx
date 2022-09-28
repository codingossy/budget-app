import React, { useContext } from "react";
import ExpenseItemList from "./ExpenseItemList";
import BudgetContext from '../context/BudgetContext'




export const ExpenseList = () => {

  const {expenses} = useContext(BudgetContext)
  
  // const expenses = [
  //   { id: 1, name: "shopping", cost: 50 },
  //   { id: 2, name: "market", cost: 55 },
  //   { id: 3, name: "food", cost: 53 },
  //   { id: 4, name: "sex", cost: 52 },
  //   { id: 5, name: "housing", cost: 59 },
  // ];
  return (
    <div>
      <input
        type="text"
        className="p-2 outline w-full lg:w-[40%]  text-black"
        placeholder="mechanic or baller? check wetin u spend on"
      />

      <ul className="flex flex-col mb-3 py-10">
        {expenses.map((expense, i) => (
          <ExpenseItemList
            key={i}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};
