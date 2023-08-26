import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from '@mui/joy/Input';
import PhonebookTitle from "./PhonebookTitle";
import { setFilter } from "redux/contacts/filterSlice";

const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value)); 
  };

  return (
    <div style={{width: 200, marginLeft: "auto", marginRight: "auto", marginTop: 20}}>

    <PhonebookTitle title="Contacts" styles={{fontSize: 20, textAlign: "center "}}/>
    <Input
      color="neutral" size="md" variant="solid"
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleInputChange}
      styles={{width: 250}}/>
    </div>
  );
};

export default FilterContact;