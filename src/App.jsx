import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import FormModal from './components/AddContacts'

const App = () => {
  return (
    <div className='flex justify-center '>
      <div className='flex flex-col items-center h-[852px] w-[400px] p-5 bg-slate-400 gap-1'>
       <Navbar/>
       <Search/>
       <FormModal/>
      </div>
    </div>
  )
}

export default App