<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import defaultLayout from './layouts/defaultLayout.vue';

export default {
  name: "app",
  components: {
    defaultLayout,
  },
  data() {
    return {

    };
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
