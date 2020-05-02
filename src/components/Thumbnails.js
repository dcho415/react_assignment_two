import React, { Component } from 'react'

export default class Thumbnails extends Component {
    render() {
        return (
            <div style={boxStyle} data-test='ThumbnailsComponent'>
                <a href={this.props.data.url}><img data-test='thumbnail' src={this.props.data.thumbnailUrl} alt="error" /></a>
                <br/>      
                <h4 data-test='photoTitle' style={{ fontWeight: 'normal' }}>{this.props.data.title}</h4> 
            </div>
        )
    }
}

const boxStyle = {
    outline: '1px solid #333', 
    padding: '10px', 
    margin: '1%', 
    width: '31.33%', 
    float: 'left',
    wordWrap: 'break-word',
    minHeight: '220px'
}
