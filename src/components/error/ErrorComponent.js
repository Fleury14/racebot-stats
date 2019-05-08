import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '..';
import './ErrorComponent.scss';

const ErrorComponent = (props) => {
  return (
    <div>
      <Navbar />
      <div className="error-component-body">
        <h1>I don't recognize the link!</h1>
        <Link to="/">
          <p>Go Home</p>
        </Link>
      </div>
    </div>
  );
}

export default ErrorComponent;
