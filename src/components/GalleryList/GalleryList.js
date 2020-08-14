import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';
import './GalleryList.css';

class GalleryList extends Component {

    render() {

        console.log(this.props.picList)

        return (
            <div>
                <p>this is connected</p>

                {this.props.picList.map((pic) => {
                    return (
                        <GalleryItem
                            picList={this.props.picList}
                            pic={pic} />
                    )
                })}

            </div>
        )
    }
}

export default GalleryList;