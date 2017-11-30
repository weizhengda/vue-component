<template>
  <div id="app">
    <div class="top">
        <img src="./assets/logo.png" alt="">
        <nav-top></nav-top>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavTop from '../src/components/my/nav/NavTop'
export default {
  name: 'app',
  components:{
    NavTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
a{
  text-decoration: none;
}
</style>
<style scoped>
  .top {
    display:flex;
    padding:20px 100px;
    border-bottom:1px solid #666;
  }
  .top img{
    width:100px;
    height:100px;
  }
</style>

