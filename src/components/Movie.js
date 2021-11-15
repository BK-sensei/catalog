import React, { Component } from 'react';
import catalog from '../catalog.json'

class Movie extends Component {

    render() {
        const id = this.props.match.params.id
        console.log(id);

        const film = catalog.find(element => element.id == id)
        console.log(film)
        
        return (
            <div>

                <h1>{film.title}</h1>
                <h3>A movie realised by : {film.director}</h3>
                <img src={film.image} />
                <p>{film.description}</p>
                <p>Casting : {film.stars} </p>  
            </div>
        );
    }
}

export default Movie;