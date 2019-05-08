import React from 'react';
import { Link } from 'react-router-dom';

const ErrorComponent = (props) => {
  return (
    <div>
      <h1>Oh no honey</h1>
      <Link to="/">
        <p>Go Home</p>
      </Link>
    </div>
  );
}

export default ErrorComponent;
