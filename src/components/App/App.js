import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    this.getPics();
  };

  state = {
    picList: []
  };

  getPics = () => {
    axios.get('/gallery')
    .then(response => {

      this.setState({
        picList: response.data
      })
    }).catch(error => {
      console.log('error in getPics', error)
    })
  };

  likePic = (likedImage) => {

    axios.put(`/gallery/like/${likedImage.id}`)
    .then(response => {
      this.getPics()
    }).catch(error => {
      console.log('error in likePic', error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList 
        picList={this.state.picList}
        getPics={this.getPics}
        likePic={this.likePic}/>
      </div>
    );
  }
}

export default App;
