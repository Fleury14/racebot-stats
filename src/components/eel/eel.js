import React, { useState, useEffect } from 'react';
import EEL from './eelView';
import { parseEELRoster } from '../../helpers';
import Papa from 'papaparse';

const EELData = (props) => {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTo9gyNOk-yJ3JbLr2DHP_YOBZ6ukWO8cFvkYBi-wo0k7gDL6SBJh-ahBbEy_PUAwstDeTLGLhzwmdE/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        // console.log('papa results', results);
        const parsedData = parseEELRoster(results.data);
        setTeams(parsedData);
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRUPzV00Hc79l-7nqNuCpqnF1tt5C0iX_mlTMXPrt0eu4HHhm4iyTyUWktBSc3TmciVE6yntOHaGffb/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        // console.log('papa results matches', results.data);
        // const parsedData = parseEELRoster(results.data);
        const matches = results.data
        if (teams.length > 0) {
          const teamsInstance = teams;
          const scheduleResults = []
          matches.forEach(match => {
            const p1Team = teamsInstance.find(team => team.members.filter(member => member.name === match.p1Discord).length > 0);
            if (!p1Team) {
              console.log('no team 1');
              return;
            };
            const p1Player = p1Team.members.find(member => member.name === match.p1Discord);
            if (!p1Player) {
              console.log('no player 1', p1Team);
              return
            };
            const p2Team = teamsInstance.find(team => team.members.filter(member => member.name === match.p2Discord).length > 0);
            if (!p2Team) {
              console.log('no team 2');
              return;
            };
            const p2Player = p2Team.members.find(member => member.name === match.p2Discord);
            if (!p2Player) return;
            console.log('players', p1Player, p2Player, match.winner);
    
            switch (match.winner) {
              case "1":
                p1Player.wins++;
                p2Player.losses++;
                break;
    
              case "2":
                p1Player.losses++;
                p2Player.wins++;
                break;
    
              case "3":
                p1Player.ties++;
                p2Player.ties++;
                break;
    
              default:
                break;
            }
          })
          console.log('instance', teamsInstance);
          setTeams(teamsInstance);
        }
        setMatches(results.data);
      },
    });
  }, [teams])
  
  // const movies = Array.from(data);
  return (
    <EEL teams={teams} />
  );
}

export default EELData;