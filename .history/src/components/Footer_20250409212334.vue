<template>
    <footer class="footer-box">
        <div class="container">
          <div class="footer-logo logo">
            <a :href="links.url"><img :src="title.logoLink" alt="logo" /></a>
          </div>
          <div class="footer-nav">
            <ul>
              <li><a :href="links.url">{{ links.title }}</a></li>
            </ul>
          </div>
          <ul class="footer-social">
            <li v-for="link in links" :key=""><a href="#"><img src="../assets/images/social/instagram-icon.svg" alt="instagram-icon"/></a></li>
            <li v-for="link in links" :key=""><a href="#"><img src="../assets/images/social/facebook-icon.svg" alt="facebook-icon"/></a></li>
            <li v-for="link in links" :key=""><a href="#"><img src="../assets/images/social/vk-icon.svg" alt="vk-icon" /></a></li>
          </ul>
        </div>
    </footer>
</template>

<script>
import { app, links, socialLinks } from '@/_config';

export default {
  data() {
    return {
      title: app.logoLink,
      links: links,
      socialLinks: socialLinks,
    };
  },
};
</script>