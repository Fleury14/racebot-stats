import axios from 'axios'

const apiUrl = process.env.REACT_APP_RACEBOT_API_URL;
const apiKey = process.env.REACT_APP_RACEBOT_APIKEY;
const apiHeader = 'apikey';


const searchRacer = async (name) => {
  const result = await axios.get(`${apiUrl}/users?name=${name}`, { headers: { [apiHeader]: apiKey } })
  .then(response => {
    if (response && response.data && response.data !== '' && response.data.id) {
      return response.data.id;
    }
    return null;
  })
  return result;
}

export default searchRacer;