import React, { Component } from 'react'
import Album from './Album';
import {connect } from 'react-redux';
import { displayAlbums } from '../actions/DisplayAlbums';
import { displayUsers } from '../actions/DisplayUsers';

export class AlbumList extends Component {
    componentDidMount = () => {
        fetch('http://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(json => this.props.displayAlbums(json))
    
        fetch('http://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => this.props.displayUsers(json))
      }

    render() {
        const {albums, users} = this.props;

        if (albums != null && users != null) {
            return albums.map((album) => (
                users.map((user) => (
                    user.id === album.userId) ?
                    <Album 
                        key={album.id}
                        title={album.title}
                        user={user.name}
                        id={album.id}
                    />
                    :
                    ''
                ))
            );
        }
        return ''; 
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayAlbums: (list) => {
            dispatch(displayAlbums(list))
        
        },
        displayUsers: (list) => {
            dispatch(displayUsers(list))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);