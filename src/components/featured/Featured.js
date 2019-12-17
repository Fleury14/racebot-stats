import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '..';
import { ReduxFeaturedData } from '../redux-data';
import './Featured.scss';

const Featured = (props) => {
  return (
    <div>
      <Navbar />
      <div className="featured-body open-sans">
        <h1>Featured Racers</h1>
        <div className="featured-data p-5">
          <ReduxFeaturedData>
            {({ featuredData }) => {
              if (featuredData ) {
                return featuredData.map((racer, index) => {
                  return (
                    <div className="racer-card" key={racer.name}>
                      <div className="d-flex justify-content-between align-items-end">
                        <Link to={`/racer/${racer.id}`}>
                          <h2>{racer.name}</h2>
                        </Link>
                        <p>Wins: {racer.wins}</p>
                      </div>
                      <div className="d-flex">
                        <div className="mr-5 d-flex align-items-center">
                          <span className="mr-2">% of races in top 3:</span>
                          <span className="featured-value">{racer.top3Percentage}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">Win %:</span>
                          <span className="featured-value">{racer.winPercentage}</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Cookies:</span>
                        <span className="featured-value">{racer.cookies}</span>
                      </div>
                      {racer.stream && (
                        <a href={racer.stream}>{racer.name}'s Twitch stream</a>
                      )}
                      
                    </div>
                  );
                })
              }
              return <p>There are no featured racers at this time.</p>
            }}
          </ReduxFeaturedData>
          <p className="text-center mt-4">If you would like to be a featured racer, you can spend cookies using "!buyreward featureme" - Featured status costs 10 cookies and lasts for 1 week!</p>
        </div>
        
      </div>
    </div>
  );
}

export default Featured;
