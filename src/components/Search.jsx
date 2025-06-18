import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
const Search = ({OnOpen,setisUpdate,filterContacts}) => {
  return (
    <div className='flex justify-between w-[100%] relative items-center'>
      <IoSearch className='absolute h-[24px] w-[24px] m-2 text-white'/>
      <input type="text" className='h-[40px] w-[305px] rounded pl-9 bg-transparent text-white' placeholder='Search Contacts' 
        onChange={filterContacts}
      />
      <FaPlusCircle className='h-[40px] w-[45px] hover:scale-[110%] transition ease-in-out duration-200 cursor-pointer text-white' 
      onClick={()=>{
        setisUpdate(false);
        OnOpen();
      }}
      />
    </div>
  )
}

export default Search