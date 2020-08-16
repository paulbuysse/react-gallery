import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

    state = {
        picDesc: true
    }

    seeDesc = () => {
        this.setState({
            picDesc: !this.state.picDesc
        })
    } 

    render() {

        const numOfLikes = this.props.pic.likes
        let phraseForLikes = ''

        if (numOfLikes === 0) {
            phraseForLikes = `Nobody likes this! :(`
        } else if (numOfLikes === 1) {
            phraseForLikes = `${numOfLikes} person likes this!`
        } else {
            phraseForLikes = `${numOfLikes} people like this!`
        }

        console.log(this.props.pic)

        return (
            <div>
                {this.state.picDesc ? <img onClick={this.seeDesc} src={this.props.pic.path} /> : <h3 onClick={this.seeDesc}>{this.props.pic.description}</h3>}
                <h3>{phraseForLikes}</h3>
                <button onClick={() => {this.props.likePic(this.props.pic)}}>like it!</button>
            </div>
        )
    }
}

export default GalleryItem;