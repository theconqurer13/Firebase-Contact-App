import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import FormModal from './components/AddContacts'
import Contacts from './components/Contacts'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
const App = () => {
  const [isUpdate,setisUpdate] = React.useState(false)
  const [contacts, setContacts] = React.useState([]);
  const [isOpen,setOpen] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState(null);
  const OnOpen = ()=>{
    setOpen(true);
  }

  const OnClose = ()=>{
    setOpen(false);
  }

  useEffect(()=>{
    const getContact = async () =>{
      try {
        const contactRef =  collection(db,"contacts");
        

        onSnapshot(contactRef,(snapshot)=>{
           const contactList =snapshot.docs.map((doc)=>{
            return {
            id:doc.id,
            ...doc.data(),
              }
            });
       
        setContacts(contactList);
        return contactList;
        });
      } catch (error) {
        throw {error}
      }
    }

    getContact();
  },[])






  return (
    
    <div className='flex justify-center '>
      <div className='flex flex-col items-center h-[100vh] w-[400px] p-5  gap-1 relative '>
       <Navbar/>
       <Search OnOpen={OnOpen} setisUpdate={setisUpdate}/>
       <div className=' overflow-y-scroll hide-scrollbar '>
          {
        contacts.map((contact)=>{
          return <Contacts key={contact.id} id={contact.id} name={contact.name} email={contact.email} setisUpdate={setisUpdate} OnOpen={OnOpen} setSelectedContact={setSelectedContact}/>
        })
       }
       </div>
       
       <FormModal isOpen={isOpen} onClose={OnClose} setOpen={setOpen} isUpdate={isUpdate} id={selectedContact?.id} name={selectedContact?.name || ""} email={selectedContact?.email || ""}/>  
      </div>

           

    </div>
  )
}

export default App