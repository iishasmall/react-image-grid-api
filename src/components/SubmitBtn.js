import React from 'react';
import PropTypes from 'prop-types';


export const SubmitBtn = (props) => {

  return (
      <input type="submit" onClick={ props.handleSubmit} />
  )

}

SubmitBtn.propTypes =  {
    handleSubmit: PropTypes.func.isRequired
}