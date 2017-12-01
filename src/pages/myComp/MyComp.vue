<template>
  <div class="myComp">
    <dl>
        <dt>video</dt>
        <dd><router-link to=" ">myVideo</router-link></dd>
    </dl>
     <div class="content">
            <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myComp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .myComp{
   width:250px;
   margin:20px;
   display:flex；
 }
 dl{
   width:350px;
   text-align: left;
   border-right:1px solid #666;
 }
 dl dd{
   padding:10px 0;
 }
 .content{
   flex:1;
   border:1px solid #ccc;
 }
</style>
