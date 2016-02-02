<template>
    <div class="artist__container">
        <div class="artist" @click="search">
            <img class="artist__image" :src="image" :alt="name">
            <h1 class="artist__title">{{ name }}</h1>
        </div>
    </div>
</template>

<script>
  import store from '../store';

  export default {
    props: {
      artist: Object
    },
    computed: {
      name () {
        return this.artist.name;
      },
      image () {
        // Get the highest res image
        return this.artist.image[this.artist.image.length - 2]['#text'];
      }
    },
    methods: {
      search () {
        store.actions.setArtist(this.name);
        store.actions.searchArtist(this.name);
      }
    }
  };
</script>

<style lang="sass" scoped>
    .artist__container {
        padding: 1rem;
    }

    .artist {
        cursor: pointer;

        background: #fff;
    }

    .artist__image {
        display: block;
        width: 100%;
    }

    .artist__title {
        margin: 0;
        padding: 0.5rem;

        text-align: center;

        font-size: 1.2rem;
        font-weight: 300;
    }
</style>
