<template>
  <div class="child">
    <p>子组件</p>
    <input type="text" v-model="msg" @change="onInput">
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: '请输入值'
      }
    },
    methods: {
      onInput: function () {
        if (this.msg.trim()) {
          this.$emit('message', this.msg);
        }
      }
    }
  }
</script>