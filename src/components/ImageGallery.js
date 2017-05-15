import React from 'react';
import PropTypes from 'prop-types';
import './css/ImageGallery.css';
import loading from '../icons/loading.gif';


export const ImageGallery = (props, index) => {


  return (
    //Image gallery item
    <ul className="image-grid">
      {props.items.length ? props.items.map((item, index) => {

        return <li key={index}>

          <img
            className={"image-grid-image"}
            id={index}
            src={item.urls.regular}
            onClick={props.imageClicked}
            alt="" />
        </li>

      })
        : <li className="image-loading"> <img src={loading} alt="" /> </li>
      }

    </ul>
  )
}



ImageGallery.propTypes = {
  items: PropTypes.array.isRequired

}


