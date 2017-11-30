<template>
  <div class="child">
    <p>子组件</p>
    <p>{{inputValue}}</p>
  </div>
</template>
<style>

</style>
<script>
    export default{
        props: {
          inputValue: String
        }
    }
</script>


