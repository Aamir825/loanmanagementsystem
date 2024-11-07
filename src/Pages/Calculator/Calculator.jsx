import React from 'react'

const Calculator = () => {
  return (
    <>
      <div>
        <div>
          <h1>Credit Calculator</h1>
          <form action="" className='flex'>
            <input className=' w-1/3' type="text" placeholder='Product Name' />
            <input className=' w-1/3' type="number" placeholder='Product Price' /><br/>
            <input className=' w-1/3' type="number" placeholder='Product Advance' />
            <input className=' w-1/3' type="number" placeholder='Grand Amount' /><br/>
            <input className=' w-1/3' type="number" placeholder='Product Profit' />
            <input className=' w-1/3' type="number" placeholder='Net Amount' /><br/>
            <input className=' w-1/3' type="number" placeholder='Months' />
            <button>Calculate</button>
          </form>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Calculator