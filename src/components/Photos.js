import React, { Component } from 'react';
import Thumbnails from './Thumbnails';

export default class Photos extends Component {
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
                .then(json => this.setState({ albumName: json.title }, () => console.log(this.state.albumName)))
        });

        this.setState({ isLoading: true });
        fetch('http://jsonplaceholder.typicode.com/albums/' + this.props.match.params.albumId + '/photos')
        .then(response => response.json())
        .then(json => 
            this.setState({
                photos: json,
                isLoading: false
            })
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
                {this.state.photos ?
                    this.state.photos.map(photo => {
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
