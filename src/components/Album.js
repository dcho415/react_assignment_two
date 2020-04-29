import React, { Component } from 'react'

export default class Album extends Component {
    render() {
        return (
            <div style style={divStyle} >
                <h3>{this.props.title}</h3>
                {this.props.user}
            </div>
        )
    }
    
}

const divStyle = {
    outline: '1px solid black', 
    padding: '10px', 
    margin: '1%',
    textAlign: 'left',
    width: '50%',
    display: 'inline-block'
}

