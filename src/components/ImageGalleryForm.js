
import React from 'react';
import PropTypes from 'prop-types';
import { SubmitBtn } from './SubmitBtn';
import './css/InputTextBox.css';
export const ImageGalleryForm = (props) => {
    return (
        <div>
            <input className="input-txt" type="text" placeholder={props.placeholder}
                value={props.currentGallery}
                onChange={props.handleInputChange} />

            <SubmitBtn handleSubmit={props.handleSubmit} />
        </div>)
}

ImageGalleryForm.propTypes = {
    currentGallery: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}


