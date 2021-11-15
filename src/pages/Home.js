import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import catalog from '../catalog.json'
// import Movie from '../components/Movie';

class Home extends Component {

    render() {

        return (
            <div>
                <h1>BK's Catalog</h1>
                <h3>Choose a movie through our catalog</h3>

                {catalog.map(movie =>(
                    <Link
                        key= {`${movie.title}-${movie.id}`}
                        to={`/movie/${movie.id}`}
                    >
                        <p>{movie.title}</p>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Home;