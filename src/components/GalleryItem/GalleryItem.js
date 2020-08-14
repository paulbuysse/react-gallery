import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <p>dkjn</p>
                <img src={this.props.pic.path} />
            </div>
        )
    }
}

export default GalleryItem;