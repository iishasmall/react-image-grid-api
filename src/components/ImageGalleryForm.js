
import React from 'react';
import PropTypes from 'prop-types';
import {SubmitBtn} from './SubmitBtn';

export const ImageGalleryForm = (props) => {
    return (
        <div>
            <input type="text" placeholder={props.placeholder} value={props.currentGallery} onChange={props.handleInputChange} />
            <SubmitBtn handleSubmit={props.handleSubmit}/>
        </div>)
}

ImageGalleryForm.propTypes = {
    currentGallery: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}


