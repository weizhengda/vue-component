<template>
  <div id="prop">
      <h2>子组件向父组件传值</h2>
          <father1></father1>
      <h2>父组件向子组件传值</h2>
          <father2></father2>
          <child2></child2>
  </div>
</template>
<script>
import father1 from './../../components/api/prop/childToFather/father'
import father2 from './../../components/api/prop/fatherToChild/father'
import child2 from './../../components/api/prop/fatherToChild/child'
export default {
  name: 'prop',
  component: {
      father1,
      father2,
      child2
  }
}
</script>

