import React from 'react';
import PropTypes from 'prop-types';


export const ModalWindow = (props) => {
   

      let modalStyle = {
          position:'absolute',
          top:'0',
          left:'0',
          margin:' 0 auto',
          width: '100%',
          height: '1000px',
          zIndex:'20',
          backgroundColor:'rgba(0,0,0,0.5)',
          display:props.modal ? 'block' :'none'
          
      }

      let modalImageStyle = {
          position:'absolute',
          top:'10%',
          left:'20%',
          width:'auto',
          maxWidth:'60%',
          height:'auto',
          zIndex:'22'
      }
        

      return (  
       <div style={modalStyle} onClick={props.modalHandler}> 
        <img style={modalImageStyle} src={props.modalImage}/>
       </div>
      )
       
}

ModalWindow.propTypes = {
 modalHandler: PropTypes.func.isRequired

}