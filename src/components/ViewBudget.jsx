import React from 'react'

const ViewBudget = (expenses) => {
  return (
    <>
      <span>Budget: ${expenses.budget}</span>
      <button type='button' className='px-5 py-1 bg-gray-500 text-white capitalize'>edit</button>
    </>
  )
}

export default ViewBudget