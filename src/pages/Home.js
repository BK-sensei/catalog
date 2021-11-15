import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import catalog from '../catalog.json'
// import Movie from '../components/Movie';

class Home extends Component {

    render() {

        return (
            <div>
                <h1 className="fw-bold text-center mb-4">Choose a movie through our catalog</h1>

                {catalog.map(movie =>(
                    <Link
                        key= {`${movie.title}-${movie.id}`}
                        to={`/movie/${movie.id}`}
                    >
                        <ul>
                            <li>
                                {movie.title}
                            </li>
                        </ul>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Home;