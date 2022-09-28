import { useState } from "react";
import "./App.css";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { Budget } from "./components/Budget";
import { ExpenseList } from "./components/ExpenseList";
import RemainBudget from "./components/RemainBudget";
import TotalExpenses from "./components/TotalExpenses";
import { BudgetProvider } from "./context/BudgetContext";

function App() {
  return (
    <BudgetProvider>
    <div className="container mx-auto">
      <h1 className="py-5 text-green-500 text-2xl lg:text-3xl font-semibold">
        Spend Wise
      </h1>

      <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
        <Budget />
        <RemainBudget />
        <TotalExpenses />
      </div>

      <h3 className="py-5 text-3xl font-semibold capitalize text-red-500">Expenses</h3>

      <div className="">
        <ExpenseList />
      </div>

      <h3 className="py-5 text-3xl font-semibold capitalize text-blue-500">Add Expenses</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
        <AddExpenseForm />
      </div>
    </div>
    </BudgetProvider>
  );
}

export default App;
