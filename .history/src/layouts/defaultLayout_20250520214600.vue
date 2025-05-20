<template>
  <div>
    <Header />
    <div class="wrapper">
      <main class="main">
        <HomePage/>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import HomePage from '@/pages/HomePage.vue';

export default {
  name: "app",
  components: {
    Header, Footer, HomePage
  },
  data() {
    return {

    };
  },
};
</script>
