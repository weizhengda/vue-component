<template>
  <div>
  <!-- message为子控件上绑定的通知；recieveMessage为父组件监听到后的方法 -->
    <p>父组件</p>
    <child v-on:message="recieveMessage"></child>
  </div>
</template>
<script>
  import child from './child'
  export default{
    components: {
      child
    },
    methods: {
      recieveMessage: function (text) {
        console.log('监听到子组件变化'+text);
      }
    }
  }
</script>
<style scoped>
  .child{
    padding:100px 0;
    border:1px solid #666;
  }
</style>
