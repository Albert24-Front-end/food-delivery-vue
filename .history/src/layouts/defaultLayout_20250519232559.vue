<template>
<Header/>
  <div class="wrapper">
    <main class="main">
      <router-view />
    </main>
  </div>
  <Footer/>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>