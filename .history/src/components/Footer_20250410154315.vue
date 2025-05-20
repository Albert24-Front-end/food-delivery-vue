<template>
    <footer class="footer">
        <div class="container">
          <div class="footer-box">
            <div class="footer-logo logo">
              <rou href="/"><img :src="title.logoLink" :alt="title.alt" /></rou>
            </div>
            <div class="footer-nav">
              <ul>
                <li v-for="link in links" :key="link.alias"><rou :href="link.url">{{ link.title }}</rou></li>
              </ul>
            </div>
          <ul class="footer-social">
            <li v-for="socialLink in socialLinks" :key="socialLink.alias"><rou :href="socialLink.url"><img :src="socialLink.linkPath" :alt="socialLink.alt"/></rou></li>
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