<template>
  <div id="navTop">
       <ul>
          <li><router-link to="/">组件API</router-link></li>
          <li><router-link to="home">自定义组件</router-link></li>
       </ul>
  </div>
</template>
<script>
export default {
  name: 'navTop',
  data() {
      return {
          
      }
  }
}
</script>
<style scoped>
   ul,li{
     list-style: none
   }
   li{
     float:left;
     line-height:70px;
     padding:0 20px;
   }
</style>
