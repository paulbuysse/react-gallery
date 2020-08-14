import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
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

        return (
            <div>
                <img src={this.props.pic.path} />
                <h3>{phraseForLikes}</h3>
                <button>like it!</button>
            </div>
        )
    }
}

export default GalleryItem;