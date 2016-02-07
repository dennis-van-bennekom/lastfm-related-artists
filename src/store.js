import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const SET_ARTIST = 'SET_ARTIST';
const SET_ARTISTS = 'SET_ARTISTS';

const state = {
  artist: '',
  artists: []
};

const actions = {
  setArtist ({dispatch}, artist) {
    dispatch(SET_ARTIST, artist);
  },

  searchArtist ({dispatch}, artist) {
    Vue.http({
      url: 'https://ws.audioscrobbler.com/2.0/',
      method: 'GET',
      params: {
        api_key: '9112859bf77f54259252dc9bc48a8cb9',
        method: 'artist.getSimilar',
        format: 'json',
        limit: 12,
        autocorrect: 1,
        artist: artist
      }
    }).then(response => {
      dispatch(SET_ARTISTS, response.data.similarartists.artist);
    });
  }
};

const mutations = {
  [SET_ARTIST] (state, artist) {
    state.artist = artist;
  },
  [SET_ARTISTS] (state, artists) {
    state.artists = artists;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
