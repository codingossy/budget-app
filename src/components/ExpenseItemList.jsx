import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import BudgetContext from "../context/BudgetContext";


const ExpenseItemList = (expense) => {

  const {dispatch} = useContext(BudgetContext)

  // to delete

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: expense.id
    })
  }

  return (
    <div>
      <li className="flex items-center capitalize justify-between border px-5">
        {expense.name}

        <div className="flex items-center mb-4 justify-center gap-x-5 gap-y-5 text-center">
          <span className="bg-blue-400 hover:bg-blue-600 p-1 px-5 text-white rounded-md cursor-pointer mt-1">
            ${expense.cost}
          </span>
          <AiFillDelete
            onClick={handleDelete}
            size={25}
            className="cursor-pointer hover:text-red-500"
          />
        </div>
      </li>
    </div>
  );
};

export default ExpenseItemList;
