import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {Form,Field,Formik} from 'formik'
import {db} from '../config/firebase.js'
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import { toast } from 'react-toastify'
const FormModal = ({onClose,isOpen,setOpen,isUpdate,name,email,id}) => {

  const addContact = async (contact) =>{
    try {
      const ContactRef = collection(db,"contacts");
      await addDoc(ContactRef,contact);
       toast.success('Contact added successfully');
      onClose();
    } catch (error) {
      console.log(error);
      throw {error}
    }
  }


  const updateContact = async (contact) =>{
    try {
      const ContactRef = doc(db,"contacts",id);
      await updateDoc(ContactRef,contact);
      toast.success('Contact Updated successfully');
      onClose();
    } catch (error) {
      console.log(error);
      throw {error}
    }
  }

  return (
    <>
     {isOpen && 
     
     (
      <>
      <Formik
        initialValues={isUpdate ? {
          name:name,
          email:email
        }: {
          name:"",
          email:""
        }}
        onSubmit={
          (values)=>{
            isUpdate ? updateContact(values,id) : addContact(values);
            setOpen(false);
          }
         
        }
      >
        <Form className='h-[244px] w-[360px] rounded bg-white p-[12px] flex flex-col items-start justify-evenly absolute mt-[60%] z-10 '>
          <AiOutlineClose className='self-end hover:scale-[120%] transition ease-in-out duration-200 cursor-pointer text-2xl' onClick={onClose} />
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className='w-[328px] h-[40px] border-[1px] rounded p-2' placeholder='enter name..' />
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className='w-[328px] h-[40px] border-[1px] rounded p-2' placeholder='enter email..' />
          <button className='border-[1.5px] rounded p-1 self-end mr-[8px] mt-[4px] bg-[#FCCA3F]' >
            {
              isUpdate ? "Update " : "Add "
            }
             Contact</button>
        </Form>
       </Formik> 
      <div className='h-screen w-screen backdrop-blur absolute right-0 '/>  
      </>
     )
     }
    
    </>
    
    );
}

export default FormModal