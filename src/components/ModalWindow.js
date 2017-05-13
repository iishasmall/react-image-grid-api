import React from 'react';
import PropTypes from 'prop-types';
import './css/ModalWindow.css';

export const ModalWindow = (props) => {


    let modalStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        margin: ' 0 auto',
        width: '100%',
        height: '1000px',
        zIndex: '20',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: props.modal ? 'block' : 'none'

    }

    return (
        <div style={modalStyle} onClick={props.modalHandler}>
            <div className="modal-image-container">
                <img className="modal-image" src={props.modalImage} alt="" />
                <div className="modal-txt-container">
                    <h2 className="modal-user-name">{props.userName}</h2>
                    <a onClick={function () { window.open(props.portfolioURL, "_blank"); window.focus(); }} target="_blank">{props.portfolioURL}</a>
                </div>
            </div>
        </div>
    )

}

ModalWindow.propTypes = {
    modalHandler: PropTypes.func.isRequired

}