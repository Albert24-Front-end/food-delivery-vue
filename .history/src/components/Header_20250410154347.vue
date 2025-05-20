<template>
    <header class="header">
      <div class="container">
        <div class="header-box">
          <div class="header-logo logo">
            <a href="/"><img :src="title.logoLink" :alt="title.alt" /></a>
          </div>
          <div class="header-controls">
            <button type="button" class="button btn-primary">
              <img src="../assets/images/icons/user.svg" alt="user-icon" />
              Войти
            </button>
            <button type="button" class="button btn-outline" data-id="cart-btn">
              <img src="../assets/images/icons/cart.svg" alt="cart-icon" />
              Корзина
            </button>
          </div>
        </div>
      </div>
    </header>
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