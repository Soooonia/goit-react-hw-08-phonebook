import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "redux/contacts/contactThunk";
import ContactForm from "components/contactForm";
import FilterContact from "components/FilterContact";
import ContactList from "components/ContactList";
import Loader from "components/Loader";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className="general__positioning">
      <div className="border__style">
        <ContactForm />
      </div>

      <FilterContact />

      {isLoading ? <Loader/> : <ContactList/>}
    </div>
  );
}

export default Contacts;