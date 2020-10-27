<template>
  <div id="app">
    <TomContent title="TOMCONTENT"/>
    <div class="footer">
      <div class="footer-content">
        <a href="https://twitter.com/tomwieck">
          Twitter
        </a>
        /
        <a href="https://www.discogs.com/user/tomwieck/collection">
          Discogs
        </a>
        /
        <a href="https://twieck.netlify.app/blog/">
          Blog
        </a>
        /
        <a href="mailto:tnwieck@gmail.com?subject=TomContent">
          E-mail
        </a>
        /
        <a href="https://www.linkedin.com/in/tom-wieck-aa5801118/">
          LinkedIn
        </a>
        /
        SoundCloud(
        <a href="https://soundcloud.com/twieck">
          Tomo
        </a>
        /
        <a href="https://soundcloud.com/tommy-garcon">
          Tommy Garcon
        </a>
        )
      </div>
      <img class="logo" alt="tomcontent.com" src="./assets/logo.png">
    </div>
  </div>
</template>

<script>
import TomContent from './components/TomContent.vue'

export default {
  name: 'App',
  components: {
    TomContent
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
