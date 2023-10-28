import axios from "axios";
const BASE_URL ="https://youtube138.p.rapidapi.com";

const options = {

    params: {

      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': '068f075a4emsh80bb08fd95b4c86p1d7d1fjsn0882f3d2c6ae',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}