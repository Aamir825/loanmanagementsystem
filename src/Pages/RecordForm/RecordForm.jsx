import React from 'react'

const RecordForm = () => {
  return (
    <>
      <div>
        <form action="" className=''>
          <div>
            <h1 className=' mb-2 text-slate-300'>Customer Details</h1>
            <div className='flex gap-2 mb-2'>
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Customer Name' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Father Name' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Contact Number' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='CNIC No' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Address' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Products list' />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='border border-[#1a2b2e] rounded-md p-4'>
              <h1 className=' mb-2 text-slate-300'>Guarrantor 1</h1>
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="file" />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md my-2' type="text" placeholder='Contact No' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Occupation' />
            </div>
            <div className='border border-[#1a2b2e] rounded-md p-4'>
              <h1 className=' mb-2 text-slate-300'>Guarrantor 2</h1>
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="file" />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md my-2' type="text" placeholder='Contact No' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Occupation' />
            </div>
          </div>
          <div>
            <h1 className=' my-2 text-slate-300'>Product Details</h1>
            <div className='flex gap-2 mb-2'>
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Model No' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product price' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Advance pay' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Total Amount' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Net Amount' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Profit %' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Months' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Monthly Pay' />
              <input className=' w-full py-2 px-2 bg-[#ff3300] rounded-md cursor-pointer' type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default RecordForm