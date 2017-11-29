<template>
  <div>
    <input type="text" v-model="msg">
    <br>
       <!-- 将子控件属性inputValue与父组件msg属性绑定 -->
    <child :inputValue="msg"></child>
  </div>
</template>
<style>

</style>
<script>
import child from './child'
export default {
  data() {
    return {
      msg: "请输入"
    };
  },
  components: {
    child
  }
};
</script>