<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
      <div class="footer-content">
        <a href="https://twitter.com/tomwieck">
          Twitter
        </a>
        /
        <a href="https://www.discogs.com/seller/tomwieck/profile">
          Discogs
        </a>
        /
        <a href="https://plaintextreview.netlify.app/">
          Reviews
        </a>
        /
        <a href="mailto:tnwieck@gmail.com?subject=TomTier">
          E-mail
        </a>
        /
        <a href="https://soundcloud.com/twieck">
          SoundCloud
        </a>
        /
        <a href="https://stream.tomtier.co.uk/">
          Stream
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: black;

}
.footer {
  background-color: black;
  padding: 20px;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer-conter {
  width: 100%;
}
.logo {
  padding: 40px;
  width: 50%;
}
</style>
