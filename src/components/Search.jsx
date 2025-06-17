import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className='flex justify-between w-[100%] relative items-center'>
      <IoSearch className='absolute h-[24px] w-[24px] m-2'/>
      <input type="text" className='h-[40px] w-[295px] rounded pl-9' placeholder='Search Contacts' />
      <FaPlusCircle className='h-[40px] w-[45px]' />
    </div>
  )
}

export default Search