<template>
  <navigation/>
  <router-view/>
</template>

<style lang="scss">

</style>

<script>
import navigation from './views/layout/components/navigation.vue';

export default {
  name: 'App',
  components: {
    navigation
  }
};

</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>