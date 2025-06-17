import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import FormModal from './components/AddContacts'
import Contacts from './components/Contacts'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './config/firebase'
const App = () => {

  const [contacts, setContacts] = React.useState([]);


  useEffect(()=>{
    const getContact = async () =>{
      try {
        const contactRef =  collection(db,"contacts");
        const ContactsSnapshot =  await getDocs(contactRef);
        const contactList = ContactsSnapshot.docs.map((doc)=>{
          return {
          id:doc.id,
          ...doc.data(),
        }
      });
       
        setContacts(contactList);
      } catch (error) {
        throw {error}
      }
    }

    getContact();
  },[])






  return (
    
    <div className='flex justify-center '>
      <div className='flex flex-col items-center h-[852px] w-[400px] p-5  gap-1'>
       <Navbar/>
       <Search/>
       {/* <FormModal/> */}
       {
        contacts.map((contact)=>{
          return <Contacts key={contact.id} name={contact.Name} email={contact.Email}/>
        })
       }
      </div>
    </div>
  )
}

export default App