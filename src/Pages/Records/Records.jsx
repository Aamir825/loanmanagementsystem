import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, PrinterIcon } from 'lucide-react'

const Records = () => {
  return (
    <>
      <div>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" border-none bg-white flex-row-reverse justify-end gap-3">
              <p className=' text-black'>Muhammad Aamir</p>
              <h1 className=' text-black'>#09765421098</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                  <div>
                    <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                  </div>
                  <div>
                    <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18}/> Print</button>
                  </div>
                </div>
                <div className=' flex flex-col py-2'>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p>Customer Name</p>
                      <h1 className=' text-slate-500'>Kaleem Ullah</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p>Father Name</p>
                      <h1 className=' text-slate-500'>Jibran Khan</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p>Phone</p>
                      <h1 className=' text-slate-500'>03325467893</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p>CNIC</p>
                      <h1 className=' text-slate-500'>14301-5675789-4</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p>Address</p>
                      <h1 className=' text-slate-500'>Phase 04 Sector N1 Street 02 House 88 Hayattabad Peshawar</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p>Item name</p>
                      <h1 className=' text-slate-500'>iphone 14 Pro Max</h1>
                    </div>
                  </div>
                </div>
                {/* <table className=' w-full border-collapse'>
                  <thead>
                    <th className='text-left border border-[#1a2b2e] p-2'>id</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>C/Name</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>F/Name</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Phone</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>CNIC</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Address</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Item Name</th>
                    <th className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Actions</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-left border border-[#1a2b2e] p-2'>#09765421098</td>
                      <td className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Kamran Khan</td>
                      <td className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Kaleem Ullah</td>
                      <td className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>03324567890</td>
                      <td className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>14301-5675789-4</td>
                      <td className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>Phase 04 Sector N1 Street 02 House 88 Hayattabad Peshawar</td>
                      <td className=' text-center border border-[#1a2b2e] p-2 text-[11px]'>iphone 14 Pro Max</td>
                    </tr>
                  </tbody>
                </table> */}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default Records