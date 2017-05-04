import React, { Component } from 'react';
import Unsplash, { toJson } from "unsplash-js";
import { ImageGallery } from './components/ImageGallery';
import { ImageGalleryForm } from './components/ImageGalleryForm';
import { ModalWindow } from './components/ModalWindow';
import RandomNum from "./utils/RandomNum";
import * as constants from './config/Config';

import './App.css';

class App extends Component {

  state = {
    items: [],
    currentGallery: constants.GALLERY_CHOICE_DEFAULT,
    showModal:false,
    modalImage:''
    
  };

  
  randomNum = () =>{
    let randNum = new RandomNum(constants.RANGE_START, constants.RANGE_END);
    return randNum.getNum();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.getJSON();
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    this.setState({
      currentGallery: evt.target.value
    })
  }


  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      currentGallery: ''
    })
  }
  // show Image Clicked
  showModalHandler = (evt) => {
    evt.preventDefault();
   
    this.setState({
      modalImage : evt.target.getAttribute('src').toString()
    })
 
    this.showModal();
  }
  
  hideModalHandler = (evt) => {
    evt.preventDefault();
    this.hideModal();
  }
  
//hide modal
  hideModal = () => {
    this.setState({
      showModal:false
    });
  }

//show Modal
  showModal = () =>{
    this.setState({
      showModal:true
    })
  }

  


  componentDidMount() {

    this.getJSON();
  }



  getJSON = () => {

    let unsplash = new Unsplash({
      applicationId: constants.APPLICATION_ID,
      secret: constants.SECRET,
      callbackUrl: constants.CALLBACK_URL
    });


    unsplash.search.photos(this.state.currentGallery, this.randomNum(), constants.IMAGE_AMOUNT)
      .then(toJson)
      .then(json => {

        let items = json.results;
        this.setState({ items })
       // console.log(items);
      });
  }


  render() {
    const submitHandler = this.state.currentGallery ? this.handleSubmit : this.handleEmptySubmit
   // const imageHandler = this.state.showModal ? this.showModal : this.hideModal;
    return (
      <div className="App">
        <ImageGalleryForm handleInputChange={this.handleInputChange}
          handleSubmit={submitHandler} />
        <ImageGallery items={this.state.items} imageClicked={this.showModalHandler} modalImg={this.state.modalImage}/>
        <ModalWindow modal={this.state.showModal} modalHandler={this.hideModalHandler} modalImage={this.state.modalImage}/>
      </div>
    );
  }
}

export default App;
