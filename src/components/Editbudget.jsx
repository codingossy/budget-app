import React, { useState } from "react";

function Editbudget(expenses) {
  const [number, setNumber]  = useState(expenses.budget)

  return (
    <>
      <input type="number" id="name" value={number} required
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        onClick={() => expenses.handleSave(number)}
      type="button" className="py-1 px-5 bg-green-500 text-white capitalize">save</button>
    </>
  );
}

export default Editbudget;
