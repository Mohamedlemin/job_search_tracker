
import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params: {
      key: '18196a9c7c2f4ce5bfc9efab9e5390d9',
    },
    
});
// export default axios.create({
//     baseURL:'https://free-to-play-games-database.p.rapidapi.com/api',
//     method: 'GET',
//     params: {
//       tag: '3d.mmorpg.fantasy.pvp',
//       platform: 'pc'
//     },
//     headers: {
//       'X-RapidAPI-Key': '0b53623698msh7d3a3b51b83f8e2p1d81aajsn82c84fe97154',
//       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//     }
// });



