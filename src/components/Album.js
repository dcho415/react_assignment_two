import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Album extends Component {
    render() {
        return (
            <div style={divStyle} data-test='AlbumComponent'>
                <h3 data-test='albumTitle'><Link to={'/photos/' + this.props.id}>{this.props.title}</Link></h3>
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

