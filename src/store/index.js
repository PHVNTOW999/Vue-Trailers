import { createStore } from 'vuex'

import axios from 'axios'

import header from './modules/header.js'

export default createStore({
  state: {
    trailers: [],
    genres: [],
    actors: [],
    directors: []
  },
  mutations: {
    SET_TRAILERS_FROM_API (state, trailers) {
      state.trailers = trailers
    },
    SET_GENRES_FROM_API (state, genres) {
      state.genres = genres
    },
    SET_ACTORS_FROM_API (state, actors) {
      state.actors = actors
    },
    SET_DIRECTORS_FROM_API (state, directors) {
      state.directors = directors
    }
  },
  actions: {
    GET_TRAILERS_FROM_API ({ commit }) {
      return axios.get("http://localhost:3000/trailerList").then((trailers) => { 
        commit("SET_TRAILERS_FROM_API", trailers.data);
        return trailers
      })
    },
    GET_GENRES_FROM_API ({ commit }) {
      return axios.get("http://localhost:3000/genres").then((genres) => { 
        commit("SET_GENRES_FROM_API", genres.data);
        return genres
      })
    },
    GET_ACTORS_FROM_API ({ commit }) {
      return axios.get("http://localhost:3000/actors").then((actors) => { 
        commit("SET_ACTORS_FROM_API", actors.data);
        return actors
      })
    },
    GET_DIRECTORS_FROM_API ({ commit }) {
      return axios.get("http://localhost:3000/directors").then((directors) => { 
        commit("SET_DIRECTORS_FROM_API", directors.data);
        return directors
      })
    }
  },
  getters: {
    TRAILERS(state) {
      return state.trailers
    },
    GENRES(state) {
      return state.genres
    },
    ACTORS(state) {
      return state.actors
    },
    DIRECTORS(state) {
      return state.directors
    }
  },
  modules: { 
    header,
  }
})
