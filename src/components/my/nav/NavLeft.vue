<template>
  <div class="navLeft">
    <dl>
        <dt>prop</dt>
        <dd><router-link to="/child-to-father">child-to-father</router-link></dd>
        <dd><router-link to="/father-to-child">father-to-child</router-link></dd>
        <dt>async</dt>
        <dd><router-link to="/asyncComp">asyncComp</router-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'navLeft'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .navLeft{
   width:250px;
   margin:20px;
   border-right:1px solid #666;
 }
 dl{
   width:350px;
   text-align: left;
 }
 dl dd{
   padding:10px 0;
 }
</style>
