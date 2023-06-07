import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ button, handleClick }) => (
  <>
    <button
      type="button"
      key={button.id}
      className={button.classes}
      onClick={handleClick}
    >
      {button.name}
    </button>
  </>
);
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  button: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
  }).isRequired,
};
export default Button;
