<template>
  <div id="app">
    <search></search>

    <div class="artists">
      <artist v-for="artist in artists"
              :artist="artist">
      </artist>
    </div>
  </div>
</template>

<script>
  import store from './store';

  import Search from './components/Search';
  import Artist from './components/Artist';

  export default {
    components: {
      Search,
      Artist
    },
    computed: {
      artists () {
        return store.state.artists;
      }
    }
  };
</script>

<style lang="sass">
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Roboto', sans-serif;

    background: linear-gradient(#EDE574, #E1F5C4);
  }

  .artists {
    margin: 0 auto;
    max-width: 70rem;
    display: flex;
    flex-wrap: wrap;

    .artist__container {
      width: 33.333%;
    }
  }

  @media screen and (max-width: 40em) {
    .artists .artist__container {
      width: 50%;
    }
  }

  @media screen and (max-width: 25rem) {
    .artists .artist__container {
      width: 100%;
    }
  }
</style>
