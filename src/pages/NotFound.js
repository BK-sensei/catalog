import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>ERROR 404</h1>
                <p>This page does not longer exist</p>
                <Link className="nav-link" to="/">Back to Homepage</Link>
            </div>
        );
    }
}

export default NotFound;