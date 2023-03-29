// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  width500path: (imgPath) => `https://image.tmdb.org/t/p/w500`,
  img_path: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  apiKey: process.env.API_KEY
}

const getAllProfiles = async () => {
  const response = await axios.get(`/api/profile`);
  return response.data || [];
};

const loginUser = async (details) => {
  const response = await axios.post(`/api/login/`, details)
  return response.data
}

const getUser = async (userId) => {
  const response = await axios.get(`/api/` + userId)
  return response.data
}

export const createUser = async (details) => {
  const response = await axios.post(`/api/register/`, details)
  return response.data
}

export const getVideo = async () => {
  // https://api.themoviedb.org/3/movie/527774/videos?api_key=yourAPIkey&language=en-US
  const response = await axios.get(`${apiConfig.baseUrl}{media_type}/{media_id}videos?api_key=${apiConfig.apiKey}&language=en-US`)
}


const getTrending = async () => {
  // https://api.themoviedb.org/3/trending/all/day?api_key=yourAPIkey
  const response = await axios.get(`${apiConfig.baseUrl}trending/all/day?api_key=${apiConfig.apiKey}`)
  let arr = response.data.results
  let movielist = []

  arr.forEach(item =>
    movielist.push({ poster: item.poster_path, title: (item.title || item.name), id: item.id, media_type: item.media_type }))
  // console.log(movielist)
  return movielist

}

const getPopularMovie = async () => {
  // https://api.themoviedb.org/3/movie/popular?api_key=yourAPIkey&language=en-Uk&page=1
  const response = await axios.get(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}&language=en-Uk`)
  let arr = response.data.results
  let popMovieList = []
  arr.forEach(item =>
    popMovieList.push({ poster: item.poster_path, title: (item.title || item.name), id: item.id, media_type: "movie" }))

  return popMovieList

}

export const getPopularTV = async () => {
  // https://api.themoviedb.org/3/movie/popular?api_key=yourAPIkey&language=en-Uk&page=1
  const response = await axios.get(`${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}&language=en-Uk`)
  let arr = response.data.results
  let popTvList = []
  arr.forEach(item =>
    popTvList.push({ poster: item.poster_path, title: (item.original_name || item.name), id: item.id, media_type: "tv" }))

  return popTvList

}

const getUpcoming = async () => {
  //https://api.themoviedb.org/3/movie/upcoming?api_key=yourAPIkey&language=en-US&page=1
  const response = await axios.get(`${apiConfig.baseUrl}movie/upcoming?api_key=${apiConfig.apiKey}`)
  let arr = response.data.results
  let upcomingList = []
  arr.forEach(item =>
    upcomingList.push({ poster: item.poster_path, title: (item.title || item.name), id: item.id, media_type: "movie" }))

  return upcomingList
}

export const getTopRated = async () => {
  // https://api.themoviedb.org/3/movie/top_rated?api_key=yourAPIkey&language=en-US
  const topMovie = await axios.get(`${apiConfig.baseUrl}movie/top_rated?api_key=${apiConfig.apiKey}&language=en-US`)
  const topTv = await axios.get(`${apiConfig.baseUrl}tv/top_rated?api_key=${apiConfig.apiKey}&language=en-US`)
  let movieArr = topMovie.data.results
  let tvArr = topTv.data.results
  let topRated = []
  movieArr.forEach(movie =>
    topRated.push({ description:movie.overview,  poster: movie.poster_path, title: (movie.title || movie.name), id: movie.id, media_type: "movie" }))

  tvArr.forEach(tele =>
    topRated.push({ description:tele.overview, poster: tele.poster_path, title: (tele.title || tele.name), id: tele.id, media_type: "tv" }))

  return topRated
}

export const searchForItem = async(media_name) => {
  // https://api.themoviedb.org/3/search/multi?api_key=yourAPIkey&language=en-US&query=we%20have%20a%20ghost
  const response = await axios.get(`${apiConfig.baseUrl}search/multi?api_key=${apiConfig.apiKey}&language=en-US&query=${media_name}`)
  return response
 
}


export const getReviewsFromAPI = async(media_id, media_type) => {
  // https://api.themoviedb.org/3/movie/527774/reviews?api_key=yourAPIkey&language=en-US&page=1
  const response = await axios.get(`${apiConfig.baseUrl}${media_type}/${media_id}/reviews?api_key=${apiConfig.apiKey}&language=en-US`)
  return response
}

const getMediaDetails = async (media_type, media_id) => {
  // movie details - https://api.themoviedb.org/3/movie/527774?api_key=yourAPIkey&language=en-US
  const response = await axios.get(`${apiConfig.baseUrl}${media_type}/${media_id}?api_key=${apiConfig.apiKey}&language=en-US`)
  let arr = response.data
  return arr
}

const getMediaCredits = async (media_type, media_id) => {
  // credits - https://api.themoviedb.org/3/movie/527774/credits?api_key=yourAPIkey&language=en-US
  const response = await axios.get(`${apiConfig.baseUrl}${media_type}/${media_id}/credits?api_key=${apiConfig.apiKey}&language=en-US`)
  let arr = response.data.cast.slice(0, 5)
  return arr
}


const getRecommendations = async (media_type, media_id) => {
  // recommendations - https://api.themoviedb.org/3/movie/100088/similar?api_key=yourAPIkey&language=en-US&page=1
  const response = await axios.get(`${apiConfig.baseUrl}${media_type}/${media_id}/similar?api_key=${apiConfig.apiKey}&language=en-US`)
  let arr = response.data.results
  let recList = []
  arr.forEach(item =>
    recList.push({ poster: item.poster_path, title: (item.title || item.name), id: item.id, media_type: media_type }))

  return recList
}


export const getConversations = async (userID) => {
  const response = await axios.get(`/conversations/${userID}`);
  // console.log(response)
  return response
}

export const getMessages = async (userID) => {
  const response = await axios.get(`/messages/${userID}`);
  // console.log(response)
  return response
}

export const postMessage = async (details) => {
  const response = await axios.post(`/messages`, details);
  // console.log(response)
  return response
}


export const addMovieToList = async(user_id, details) => {
  const response = await axios.post(`/api/${user_id}/addedmovies`, details)
  return response
}

export const removeFromList = async(user_id, media_id, media_type) => {
  const response = await axios.delete(`/api/${user_id}/${media_id}/${media_type}/removemovie`)
  return response
}



// https://api.themoviedb.org/3/852096/movie?api_key=yourAPIkey&language=en-US 

// All of the endpoints in this file can be exported below
export { getAllProfiles, getTrending, apiConfig, getPopularMovie, getUpcoming, getMediaDetails, getMediaCredits, getRecommendations, loginUser, getUser };
