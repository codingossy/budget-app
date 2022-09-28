import React, { useContext, useState } from "react";
import ViewBudget from "./ViewBudget";
import BudgetContext from '../context/BudgetContext'
import Editbudget from "./Editbudget";

export const Budget = () => {
  const {budget, dispatch} = useContext(BudgetContext)
  const [edit, setEdit] = useState(false)


  const handleEdit = () => {
    setEdit(true)
  }
 
  const handleSave = (number) => {
    dispatch({
      type: 'SET_SAVE',
      payload: number,
    })
    setEdit(false)
  }

  return (
    <div className="bg-blue-900 py-6 text-white flex items-center justify-between px-6 rounded-lg">
        {edit ? (
          <Editbudget handleSave={handleSave}
          budget={budget} />
        ) : (
          <ViewBudget 
            handleEdit={handleEdit}
            budget={budget}
          />
        )} 
    </div>
  );
};
