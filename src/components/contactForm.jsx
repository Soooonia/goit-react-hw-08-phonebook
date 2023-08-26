import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhonebookTitle from "./PhonebookTitle";
import { addContactAsync } from "redux/contacts/contactSlice";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const onSubmitForm = (event, token) => {
    event.preventDefault();

    const contactExists = contacts.some((contact) => contact.name === name.toLowerCase());

    if (contactExists) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }

    const validNamePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

    if (!validNamePattern.test(name)) {
      alert("Please enter a valid name.");
      return;
    }

    const validPhoneNumberPattern = /^(\+?\d{1,4}([ .-]?)\(?\d{1,3}(\))?([ .-]?)\d{1,4}([ .-]?)\d{1,4}([ .-]?)\d{1,9})$/;

    if (!validPhoneNumberPattern.test(number)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const contact = {
      name,
      number,
    };
    
    dispatch(addContactAsync(contact, token));
    setName("");
    setNumber("");
  };

  return (
    <div className="contact_form">
      <form onSubmit={onSubmitForm} className="form">
        <PhonebookTitle
          title="Name"
          styles={{
            fontSize: 20,
            marginBottom: 0,
          }}
        />
        
        <Input  
          color="neutral" size="md" variant="solid"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required/>

        <PhonebookTitle
          title="Phone number"
          styles={{
            fontSize: 20,
            marginBottom: 0,
          }}
        />
        <Input
          color="neutral" size="md" variant="solid"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\\+?\\d{1,4}?[ .-]?\\(?\d{1,3}(\))?([ .-]?)\d{1,4}([ .-]?)\d{1,4}([ .-]?)\d{1,9}"
          required
        />

        <Button color="neutral" type='submit' style={{marginTop: 15}}>Add Contact</Button>
      </form>
    </div>
  );
};

export default ContactForm;