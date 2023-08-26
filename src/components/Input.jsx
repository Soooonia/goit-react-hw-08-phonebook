import React from "react";
import PropTypes from "prop-types";

const Input = ({ styles }) => {
  return (
    <input style={styles} required />
  );
};

Input.propTypes = {
  styles: PropTypes.object,
};

export default Input;