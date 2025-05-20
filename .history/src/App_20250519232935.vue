<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "app",
  components: {
    Header, Footer,
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
