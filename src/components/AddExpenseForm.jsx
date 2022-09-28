import React, { useContext, useState } from "react";
import BudgetContext from '../context/BudgetContext'
import { v4 as uuidv4 } from 'uuid';



export const AddExpenseForm = () => {

  const {dispatch } = useContext(BudgetContext)

  // state to hold values of the input by uses

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    // function for form submit

    const onSumbit = (e) => {
      e.preventDefault()
      // alert('name: ' + name +  ' cost: ' + cost)
      // clear fields
      setName('')
      setCost('')

      // data to be sent as payload
      const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
      }

      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      })

    }


  return (
    <form className="" onSubmit={onSumbit}>
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
        <div className="flex flex-col">
          <label for="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            required
            className="p-2 outline border "
            id="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            // change the user input
          />
        </div>

        <div className="flex flex-col">
          <label for="name" className="font-semibold">
            Price
          </label>
          <input
            type="number"
            required
            className="p-2 outline border "
            id="name"
            value={cost}
            onChange={(e)=>  setCost(e.target.value)}
          />
        </div>
      </div>

      <div className="py-5">
        <button className="px-6 bg-blue-700 py-2 hover:bg-blue-400 capitalize rounded-md text-white">
          save
        </button>
      </div>
    </form>
  );
};
