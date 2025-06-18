import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { doc } from 'firebase/firestore';
const Contacts = ({id,name,email,setisUpdate,OnOpen,setSelectedContact}) => {

    const deleteContact = async (id)=>{
        try {
            await deleteDoc(doc(db,"contacts",id));
            console.log("Contact deleted successfully");
        } catch (error) {
              console.log("Delete error:", error);
        }
    };

    

    const setupdate = ()=>{
        setisUpdate(true);
    }

  return (
    <div className='h-[64px] w-[360px] rounded bg-[#FFEAAE] p-2 mt-3'>
        <div className='h-[48px] w-[240px] border-none flex items-center relative'>
            <div className='mr-1'>
                <IoMdContact className='text-[#F6820C] h-[48px] w-[48px]'/>
            </div>
            <div className='flex flex-col'>
                <h2>
                    {name}   
                </h2>
                <h6 className='text-[14px]'>
                    {email}
                </h6>
                
            </div>
            <div className=' flex gap-1 absolute ml-[280px]'>
            <FaUserEdit className='h-[32px] w-[32px] hover:scale-[120%] transition ease-in-out duration-200 cursor-pointer' onClick={()=>{
                setupdate();
                OnOpen(); 
                setSelectedContact({ id, name, email });  
            }}/>
            <MdDelete className='h-[32px] w-[32px] hover:scale-[120%] transition ease-in-out duration-200 ' onClick={()=> deleteContact(id)}/>
            </div>
            

        </div>
    </div>
  )
}

export default Contacts