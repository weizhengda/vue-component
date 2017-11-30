<template>
  <div id="home">
      <nav-left></nav-left>
      <div class="content">
            <router-view></router-view>
      </div>
  </div>
</template>
<script>
import navLeft from "../components/my/nav/NavLeft";
export default {
  name: "home",
  components: {
    navLeft
  }
};
</script>
<style scoped>
#home{
  display: flex;
}
.content{
  flex:1;
  margin-top:100px;
}
</style>


