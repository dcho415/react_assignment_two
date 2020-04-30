import React, { Component } from 'react'

export default class Thumbnails extends Component {
    render() {
        return (
            <div style={boxStyle}>
                <a href={this.props.data.url}><img src={this.props.data.thumbnailUrl} alt="error" /></a>
                <br/>      
                <h4 style={{ fontWeight: 'normal' }}>{this.props.data.title}</h4> 
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
