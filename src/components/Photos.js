import React, { Component } from 'react';
import Thumbnails from './Thumbnails';
import {connect } from 'react-redux';
import displayPhotos from '../actions/DisplayPhotos';

export class Photos extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          albumId: null,
          albumName: null,
          photos: null
        }
    }
      
    componentDidMount() {
        this.setState({ albumId: this.props.match.params.albumId }, () => {
            fetch('http://jsonplaceholder.typicode.com/albums/' + this.state.albumId)
                .then(response => response.json())
                .then(json => this.setState({ albumName: json.title }))
        });

        this.setState({ isLoading: true });
        fetch('http://jsonplaceholder.typicode.com/albums/' + this.props.match.params.albumId + '/photos')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoading: false
            })
            this.props.displayPhotos(json)
        }   
        )
        .catch(error => 
            this.setState({
                error,
                isLoading: false
            })
        );
    }

    render() {
        if(this.state.isLoading) {
            return <h2 style={{ fontWeight: 'normal', padding: '10px'}}>Loading...</h2>
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }

        return (
            <div style={{padding: '10px'}}>
                <h2 style={{ fontWeight: 'normal' }}> Album: {this.state.albumName}</h2>
                {this.props.photos ?
                    this.props.photos.map(photo => {
                    return <Thumbnails 
                                key={photo.id}
                                data={photo}
                            />
                    })
                    :
                    "No data found"
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayPhotos: (list) => {
            dispatch(displayPhotos(list))
        
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);