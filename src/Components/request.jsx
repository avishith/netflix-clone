const API_KEY_HERE = b715fffa7ac0c40736ee9c2f515c23c4;


const requests ={
action :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28`,

originals:`ttps://api.themoviedb.org/3/discover/tv?api_key=${API_KEY_HERE}&with_networks=213`,

ComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35`,

HorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27`,

ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28`,

RomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749`,

Documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99`
}

export default requests;