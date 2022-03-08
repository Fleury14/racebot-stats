import groups from '../data/ac-groups';

const parseAC = () => {
  console.log('parsing ac');

  const authkey = process.env.REACT_APP_GOOGLE_AUTH_KEY;
  const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1uMig-7JbT_L6kLRo1cRnwOzSpLWlIUbqAEQlwZUTI88/edit?usp=sharing';

  return groups;
  
}

export default parseAC;