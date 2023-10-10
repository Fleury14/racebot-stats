import React, { useState, useEffect } from 'react';
import EEL from './eelView';
import { parseEELRoster } from '../../helpers';
import schedule from '../../data/eel-schedule';
import Papa from 'papaparse';

const EELData = (props) => {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [fullSchedule, setSchedule] = useState([]);
  const [tidal, setTidal] = useState([]);
  
  const isMemberOfTeam = (team, check) => {
    if (!team) return false;
    let result = false;
    team.members.forEach(member => {
      if (member.name === check) result = true;
    });
    
    return result;
  }

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRnijbLMtssj_l_XOMx7A0sVgLJazXsDnrmUk02-szDXYACFI1cM8BGMZTa7uuDIMXK3nzCBACpQnQK/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setTidal(results.data);
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTo9gyNOk-yJ3JbLr2DHP_YOBZ6ukWO8cFvkYBi-wo0k7gDL6SBJh-ahBbEy_PUAwstDeTLGLhzwmdE/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
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
        // const parsedData = parseEELRoster(results.data);
        const matches = results.data
        if (teams.length > 0) {
          const teamsInstance = teams;
          // const scheduleResults = []
          matches.forEach(match => {
            const p1Team = teamsInstance.find(team => team.members.filter(member => member.name === match.p1Discord).length > 0);
            if (!p1Team) {
              return;
            };
            const p1Player = p1Team.members.find(member => member.name === match.p1Discord);
            if (!p1Player) {
              return
            };
            const p2Team = teamsInstance.find(team => team.members.filter(member => member.name === match.p2Discord).length > 0);
            if (!p2Team) {
              return;
            };
            const p2Player = p2Team.members.find(member => member.name === match.p2Discord);
            if (!p2Player) return;
            
    
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
              case "4":
                p1Player.losses++;
                p2Player.losses++;
                break;

              default:
                break;
            }
          })
          // console.log('instance', teamsInstance);
          for (const week in schedule) {
            schedule[week].forEach(match => {
              const team1 = teamsInstance.find(team => team.name === match.team1);
              const team2 = teamsInstance.find(team => team.name === match.team2);
              const weekMatchups = results.data.filter(match => match.week === week.toString());
              const matchups = weekMatchups.filter(match => isMemberOfTeam(team1, match.p1Discord) || isMemberOfTeam(team2, match.p1Discord));

              let team1Score = 0;
              let team2Score = 0;
              let gamesPlayed = 0;
              matchups.forEach(matchup => {
                if(!team1 || !team2) console.log('potential error in the following matchup', matchups, match, 'team1', team1, 'team2', team2, teams)
                if(matchup.winner === "1" && isMemberOfTeam(team1, matchup.p1Discord)) {
                  team1.matchWins++;
                  team2.matchLosses++;
                  team1Score++;
                  gamesPlayed++;
                }
                if(matchup.winner === "1" && isMemberOfTeam(team2, matchup.p1Discord)) {
                  team2.matchWins++;
                  team1.matchLosses++;
                  team2Score++;
                  gamesPlayed++;
                }
                if(matchup.winner === "2" && isMemberOfTeam(team1, matchup.p2Discord)) {
                  team1.matchWins++;
                  team2.matchLosses++;
                  team1Score++;
                  gamesPlayed++;
                }
                if(matchup.winner === "2" && isMemberOfTeam(team2, matchup.p2Discord)) {
                  team2.matchWins++;
                  team1.matchLosses++;
                  team2Score++;
                  gamesPlayed++;
                }
                if(matchup.winner === "3") {
                  team1.matchTies++;
                  team2.matchTies++;
                  team1Score += 0.5;
                  team2Score += 0.5;
                  gamesPlayed++;
                }
                if(matchup.winner === "4") {
                  team1.matchLosses++;
                  team2.matchLosses++;
                  gamesPlayed++;
                }
              });
              
              match["team1Score"] = team1Score;
              match["team2Score"] = team2Score;
              if (matchups.length < 3) return;
              if (gamesPlayed < 3) return;
              if (team1Score === 0 && team2Score === 0) return; // account for matches being pre-entered.
              if (team1Score > team2Score) {
                team1.wins++
                team1.points += 3;
                team2.losses++;
                match["winner"] = 1;
              }
              if (team1Score < team2Score) {
                team2.wins++;
                team2.points += 3;
                team1.losses++;
                match["winner"] = 2;
              }

              if (team1Score === team2Score) {
                team1.ties++;
                team1.points += 1;
                team2.ties++;
                team2.points += 1;
                match["winner"] = 3;
              }
            })
          }
          setSchedule(schedule);
          setTeams(teamsInstance);
          
        }
        setMatches(results.data);
      },
    });
  }, [teams])
  
  // const movies = Array.from(data);
  return (
    <EEL teams={teams} schedule={fullSchedule} matches={matches} tidal={tidal}/>
  );
}

export default EELData;