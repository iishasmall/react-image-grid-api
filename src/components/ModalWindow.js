import React from 'react';
import PropTypes from 'prop-types';


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

    let modalImageContainer = {
        
        position: 'absolute',
        top: '10%',
        left: '20%',
        zIndex: '22'
    }

    let modalImage = {
        
         width: 'auto',
         maxWidth: '60%',
         height: 'auto',
    }

    let userNameStyle = {     
        marginTop:'-30px',
        fontSize: '1.2em'
    }

    let modalTxtContainer = {
        
        position:'relative',
        width:'200px',
        left:'130px',
        margin:'30px 0 0 0',
        display:'block',
        textAlign:'left',
        color:'#ffffff'
    }

    return (
        <div style={modalStyle} onClick={props.modalHandler}>
            <div style={modalImageContainer}>
                <img style={modalImage} src={props.modalImage} alt=""/>
                    <div style={modalTxtContainer}>
                        <h2 style={userNameStyle}>{props.userName}</h2>
                        <a onClick={function(){window.open(props.portfolioURL,"_blank");window.focus();}} target="_blank">{props.portfolioURL}</a>
                    </div>
            </div>
        </div>
    )

}

ModalWindow.propTypes = {
    modalHandler: PropTypes.func.isRequired

}