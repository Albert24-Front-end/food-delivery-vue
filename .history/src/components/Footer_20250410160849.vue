<template>
    <footer class="footer">
        <div class="container">
          <div class="footer-box">
            <div class="footer-logo logo">
              <router-link a="/"><img :src="title.logoLink" :alt="title.alt" /></router-link>
            </div>
            <div class="footer-nav">
              <ul>
                <li v-for="link in links" :key="link.alias"><router-link :to="link.url">{{ link.title }}</router-link></li>
              </ul>
            </div>
          <ul class="footer-social">
            <li v-for="socialLink in socialLinks" :key="socialLink.alias"><router-link :to="socialLink.url"><img :src="socialLink.linkPath" :alt="socialLink.alt"/></router-link></li>
          </ul>
          </div>
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