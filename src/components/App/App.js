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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList 
        picList={this.state.picList}
        getPics={this.getPics}/>
      </div>
    );
  }
}

export default App;
