import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Contacts = (prpos) => {
  return (
    <div className='h-[64px] w-[360px] rounded bg-[#FFEAAE] p-2 mt-4'>
        <div className='h-[48px] w-[240px] border-none flex items-center'>
            <div className='mr-1'>
                <IoMdContact className='text-[#F6820C] h-[48px] w-[48px]'/>
            </div>
            <div className='flex flex-col'>
                <h2>
                    {/* {props.name} */}
                    Aditya Jethvanth
                </h2>
                <h6 className='text-[14px]'>
                    {/* {props.email} */}
                    adityajethvanth@gmail.com
                </h6>
                
            </div>
            <div className='ml-8 flex gap-3'>
                <FaUserEdit className='h-[32px] w-[32px] hover:scale-[120%] transition ease-in-out duration-200'/>
            <MdDelete className='h-[32px] w-[32px] hover:scale-[120%] transition ease-in-out duration-200'/>
            </div>
            

        </div>
    </div>
  )
}

export default Contacts