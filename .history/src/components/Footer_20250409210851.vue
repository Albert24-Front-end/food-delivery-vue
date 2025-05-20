<template>
    <footer class="footer-box">
        <div class="container">
            <div class="footer-logo logo">
            <img src="../assets/images/logo.png" alt="logo" />
          </div>
          <div class="footer-nav">
            <ul>
              <li><a href="./goods.html">Ресторанам</a></li>
              <li><a href="#">Курьерам</a></li>
              <li><a href="#">Пресс-центр</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div class="footer-social">
            <a href="#"
              ><img src="../assets/images/social/instagram-icon.svg" alt="instagram-icon"
            /></a>
            <a href="#"
              ><img src="../assets/images/social/facebook-icon.svg" alt="facebook-icon"
            /></a>
            <a href="#"><img src="../assets/images/social/vk-icon.svg" alt="vk-icon" /></a>
          </div>
        </div>
    </footer>
</template>

<script>
import { app, links } from '@/_config';

export default {
  data() {
    return {
      title: app.logoLink,
      links: 
    };
  },
};
</script>