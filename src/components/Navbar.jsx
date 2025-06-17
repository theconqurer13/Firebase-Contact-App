import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-3 w-[360px] h-[80px] bg-zinc-50 items-center m-4 rounded'>
        <img src="/src/images/logos_firebase.png" alt="logo" />
        <h1 className='text-3xl font-semibold '>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar;