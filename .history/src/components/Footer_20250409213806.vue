<template>
    <footer class="footer-box">
        <div class="container">
          <div class="footer-logo logo">
            <a href="/"><img :src="title.logoLink" :alt="logo" /></a>
          </div>
          <div class="footer-nav">
            <ul>
              <li v-for="link in links" :key="link.alias"><a :href="links.url">{{ links.title }}</a></li>
            </ul>
          </div>
          <ul class="footer-social">
            <li v-for="socialLink in socialLinks" :key="socialLink.alias"><a :href="socialLink.url"><img :src="socialLink.linkPath" :alt="socialLink.alt"/></a></li>
          </ul>
        </div>
    </footer>
</template>

<script>
import { app, links, socialLinks } from '@/_config';

export default {
  data() {
    return {
      title: app,
      links: links,
      socialLinks: socialLinks,
    };
  },
};
</script>