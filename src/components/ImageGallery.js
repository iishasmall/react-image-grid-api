import React from 'react';
import PropTypes from 'prop-types';

export const ImageGallery = (props) => {

  return (
    //Image gallery item
    <ul className="image-grid">
      {props.items.length ?
        props.items.map(item => <li key={item.id}><img src={item.urls.small} alt=""/></li>)
        : <li>Loading...</li>
      }
    </ul>
  )
}


ImageGallery.propTypes = {
  items: PropTypes.array.isRequired
}
