import React from 'react';
import PropTypes from 'prop-types';


export const InputTextBox = (props) => {

    return (
        <input className="input-txt" type="text" placeholder={props.placeholder}
            value={props.currentGallery}
            onChange={props.handleInputChange} />
    )

}
