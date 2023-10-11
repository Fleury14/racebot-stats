import { isArrayOrNodeList } from "reactstrap/lib/utils";
import { OMGasyncs, OMGplayers } from "../data/omg-asyncs";

const environment = process.env.NODE_ENV;
const apiUrl = environment === 'development' ? process.env.REACT_APP_RACEBOT_API_URL_DEV : process.env.REACT_APP_RACEBOT_API_URL;
const apiKey = process.env.REACT_APP_RACEBOT_APIKEY;
const apiHeader = 'apikey';

// note: eventually refactor the api call out

export const parseOMG = async () => {

  // initialize standing objects with baseline players
  const players = [];

  OMGplayers.forEach(player => {
    players.push({
      name: player,
      points: 0,
      races: 0,
      results: [],
      asyncwins: [],
    });
  });

  // pull data from asyncs

  const omgAsyncData = await Promise.all(OMGasyncs.map(async key => {
    const response = await fetch(`${apiUrl}/races?key=${key}`, {headers: { [apiHeader]: apiKey }})
    return response.json();
  }))
  
  console.log('async data freeenbless', omgAsyncData);

  // apply data
  // iterate through each race

  if(omgAsyncData && isArrayOrNodeList(omgAsyncData)) {
    omgAsyncData.forEach(omgAsync => {
      // iterate through entrants
      if(omgAsync.entrants && isArrayOrNodeList(omgAsync.entrants) && omgAsync.status === "Completed") {
        omgAsync.entrants.forEach(entrant => {
          // see if the entrant exists. if it doesn't, create it
          // this shouldnt happen in the actual event as the signup list should be full, but will help with testing lol
          let playerRecord = players.find(player => player.name.toLowerCase() === entrant.name.toLowerCase());
          if (!playerRecord) {
            players.push({
              name: entrant.name,
              points: 0,
              races: 0,
              results: [],
              asyncwins: [],
            });
            playerRecord = players.find(player => player.name === entrant.name);
          };
          playerRecord.races++;
          const points = 33 - entrant.placement;
          playerRecord.points += points > 0 ? points : 0;
          playerRecord.results.push(omgAsync.key);
          if (entrant.placement === 1) playerRecord.asyncwins.push(omgAsync.key)

        })
      }
    })
  }

  players.sort((a, b) => b.points - a.points);

  return {
    players,
    races: omgAsyncData
  };
}