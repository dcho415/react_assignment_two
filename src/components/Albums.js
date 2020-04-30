import React, { Component } from 'react'
import Album from './Album';

export default class Albums extends Component {
    render() {
        if (this.props.data != null && this.props.users != null) {
            return this.props.data.map((album) => (
                this.props.users.map((user) => (
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
