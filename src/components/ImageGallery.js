import React from 'react';
import PropTypes from 'prop-types';

export const ImageGallery = (props,index) => {
   
   
  return (
    //Image gallery item
    <ul className="image-grid">
     { props.items.length ? props.items.map( (item,index) => {
       
       return <li key={index}>
         <img 
          id={index} 
          src={item.urls.raw} 
          onClick={props.imageClicked}
          alt=""/>
          </li> 
        
        })
        : <li>Loading...</li>
      }
     
    </ul>
  )
}



ImageGallery.propTypes = {
  items: PropTypes.array.isRequired
  
}


