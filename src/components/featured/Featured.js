import React from 'react';
import { Navbar } from '..';
import { ReduxFeaturedData } from '../redux-data';
import './Featured.scss';

const Featured = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Featured</h1>
      <ReduxFeaturedData>
        {({ featuredData }) => {
          if (featuredData ) {
            console.log('things', featuredData);  
          }
          
        }}
      </ReduxFeaturedData>
    </div>
  );
}

export default Featured;
