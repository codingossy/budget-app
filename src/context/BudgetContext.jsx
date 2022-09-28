import { createContext, useReducer } from "react"

//  The reduceer - this is used to update the state, based on the action
// note.. use app reducer always when theres a bigger structure to handle

const AppReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
  };

  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload)
    }
    case 'SET_SAVE':
      return {
        ...state,
        budget: action.payload
      };

    default:
      return state
  }
}


// initial state when the app loads 
const initialState = {
  budget: 10000,
  expenses: [
    // {id: 12, name: 'shopping', cost: 400},
    // {id: 13, name: 'groceries', cost: 500},
    // {id: 14, name: 'woman', cost: 10},
    // {id: 15, name: 'clothes', cost: 300},
    // {id: 16, name: 'food', cost: 3000},
  ],
}

// Creates the context this is the thing our components import and use to get the state

const BudgetContext = createContext()


// the provider context which wrapps the app and gives access to the states
// it also accepts the children components, which are always nested objects
export function BudgetProvider({children}) {

  //  Sets up the app state. takes a reducer, and an initial state

  // use usestate when the app is smalll use use reducer for a more complex app

	const [state, dispatch] = useReducer(AppReducer, initialState);


  return(
    <BudgetContext.Provider value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch,

    }}>
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetContext