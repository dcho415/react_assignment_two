import React, { Component } from 'react'

export default class Thumbnails extends Component {
    render() {
        return (
            <div style={boxStyle}>
                <img src={this.props.data.thumbnailUrl}/>                
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
    wordWrap: 'break-word'
}
