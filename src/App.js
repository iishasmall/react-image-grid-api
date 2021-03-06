import React, { Component } from 'react';
import Unsplash, { toJson } from "unsplash-js";
import { ImageGallery } from './components/ImageGallery';
import { ImageGalleryForm } from './components/ImageGalleryForm';
import { ModalWindow } from './components/ModalWindow';
import { Header } from './components/Header';
import { ContentBody } from './components/ContentBody';
import RandomNum from "./utils/RandomNum";
import * as constants from './config/Config';

import './App.css';

class App extends Component {

  state = {
    items: [],
    currentGallery: constants.GALLERY_CHOICE_DEFAULT,
    header: constants.GALLERY_TITLE,
    contentBody: constants.GALLERY_EXPLANATION,
    showModal: false,
    modalImage: '',
    userName: '',
    portfolioURL: ''
  };


  randomNum = () => {
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

    let index = Number(evt.currentTarget.getAttribute('id'))

    this.setState({
      modalImage: evt.target.getAttribute('src').toString(),
      userName: this.state.items[index].user.name,
      portfolioURL: this.state.items[index].user.links.html
    });

    this.showModal();
  }

  hideModalHandler = (evt) => {
    evt.preventDefault();
    this.hideModal();
  }

  //hide modal
  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  //show Modal
  showModal = () => {
    this.setState({
      showModal: true
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
        //console.log(items);
      });


  }



  render() {
    const submitHandler = this.state.currentGallery ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <Header header={this.state.header} />
        <ContentBody contentBody={this.state.contentBody} />

        <ImageGalleryForm
          handleInputChange={this.handleInputChange}
          handleSubmit={submitHandler} />

        <ImageGallery
          items={this.state.items}
          imageClicked={this.showModalHandler}
          modalImg={this.state.modalImage} />

        <ModalWindow
          modal={this.state.showModal}
          modalHandler={this.hideModalHandler}
          modalImage={this.state.modalImage}
          userName={this.state.userName}
          portfolioURL={this.state.portfolioURL} />

      </div>
    );
  }
}

export default App;
