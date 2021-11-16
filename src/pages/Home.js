import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import catalog from '../catalog.json'

class Home extends Component {

    render() {

        return (
            <div>
                <h1 className="fw-bold text-center mb-4">Choose a movie through our catalog</h1>

                {catalog.map(movie =>(
                    <Link
                        key= {`${movie.title}-${movie.id}`}
                        to={`/movies/${movie.id}`}
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