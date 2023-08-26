import React from "react";
import PropTypes from "prop-types";

const AddContactButton = ({ styles }) => {
  return (
    <button style={styles} type="submit">Add contact</button>
  );
};

AddContactButton.propTypes = {
  styles: PropTypes.object,
};

export default AddContactButton;