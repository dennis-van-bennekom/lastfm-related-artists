<template>
  <div class="search">
    <input type="text"
           class="search__input"
           placeholder="Type artist name here"
           :value="artist"
           @input="setArtist"
           @keyup.enter="searchArtist"
    >
  </div>
</template>

<script>
  import store from '../store';

  export default {
    methods: {
      setArtist (e) {
        store.actions.setArtist(e.target.value);
      },
      searchArtist () {
        store.actions.searchArtist(this.artist);
      }
    },
    computed: {
      artist () {
        return store.state.artist;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .search {
    padding: 2rem 0;

    text-align: center;

    background: #FFFFFF;
  }


  .search__input {
    width: 100%;
    max-width: 20rem;
    padding: 0.3rem 0;

    font-size: 1rem;

    outline: none;
    border: none;
    border-bottom: 2px solid #EDE574;
  }
</style>
