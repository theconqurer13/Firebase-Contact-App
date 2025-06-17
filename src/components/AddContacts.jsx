import React from 'react'

const FormModal = () => {
  return (
    <div className='h-[244px] w-[360px] rounded bg-white p-[12px] flex flex-col items-start justify-evenly'>
        <label htmlFor="">Name</label>
        <input type="text" className='w-[328px] h-[40px] border-[1px] rounded p-2' placeholder='enter name..' />
        <label htmlFor="">Email</label>
        <input type="text" className='w-[328px] h-[40px] border-[1px] rounded p-2' placeholder='enter email..' />
        <button className='border-[1.5px] rounded p-1 self-end mr-[8px] mt-[4px] bg-[#FCCA3F]' >Add Contact</button>
    </div>
  )
}

export default FormModal