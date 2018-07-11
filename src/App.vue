<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/**import bg from './assets/img/bg.jpeg'*/
export default {
  name: 'App'
}
</script>

<style>
body{

}
#app {
  position: fixed;
  top:0;
  left:0;
  z-index:-10;
  zoom: 1;
  width:100%;
  height:100%;
  min-height:800px;
  background-image:url("./assets/img/bg1.jpg");
  background-size:cover;
  background-position:center 0;
  background-repeat:no-repeat;
  /**opacity:0.5;
  filter:alpha(opacity=50);*/
  background-color: #fff;
  /**font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:64em;*/
  /**margin:0 auto;*/

}
</style>
