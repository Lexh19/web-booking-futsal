<template>
<AppHeader/>
<body>
  <router-view/>
</body>
<AppFooter/>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name:'App',
  components:{
    AppHeader,
    AppFooter
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 922px){
  *, body{
    width: 100%;
  }
}
</style>


