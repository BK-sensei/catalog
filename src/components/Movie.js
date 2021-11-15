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

                <h1 className="text-center fw-bold">{film.title}</h1>
                <h4 className="text-center text-dark fst-italic mb-4">A movie realised by : {film.director}</h4>
                <div className="text-center mb-4">
                    <img src={film.image} />
                </div>
                <div className="px-4">
                    <p><span className="fw-bold">Description :</span> {film.description}</p>
                    <p className="fw-bold mb-0">Casting :</p>  
                    <ul>
                        <li>{film.stars[0]}</li>
                        <li>{film.stars[1]}</li>
                        <li>{film.stars[2]}</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Movie;