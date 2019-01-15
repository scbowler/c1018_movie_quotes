import React, { Component } from 'react';

class MovieList extends Component {
    isPrivate = this.props.match.params.type === 'private'

    render(){
        return (
            <div>
                <h1 className="center">
                    Movie List
                    <div className="grey-text">{this.isPrivate && <small>Private</small>}</div>
                </h1>
            </div>
        );
    }
}

export default MovieList;
