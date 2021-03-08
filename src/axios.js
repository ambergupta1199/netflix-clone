//https://api.themoviedb.org/3/movie/550?api_key=19f84e11932abbc79e6d83f82d6d1045

import axios from "axios";

const instance = axios.create({
baseURL:"https://api.themoviedb.org/3",
});

export default instance;