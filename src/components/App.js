import React , {useState, useEffect}from "react";
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]=useState([]);

  const addContactfunc =(contact) =>{
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler =(id) => {
    const new_cont_list=contacts.filter((contact) => {
      return contact.id !==id;
    });
    setContacts(new_cont_list);
  };

  useEffect(() => {
    const old_contacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(old_contacts) setContacts(old_contacts);
  },[]);

  useEffect(() => {
    if(contacts.length !==0 ) localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    console.log(contacts);
  },[contacts]);


  return (
    <div className="ui container">
      <Header />
      <AddContact  addContactfunc={addContactfunc}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
