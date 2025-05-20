export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "http://localhost:5173/" : "https://tocode.ru",
};

export const app = {
    logoLink: new URL('@/assets/images/logo.png', import.meta.url).href,
    alt: "logo",
};

export const links = [
    {
        title: "Ресторанам",
        alias: "restaurants",
        url: "/res",
    },
    {
        title: "Курьеры",
        alias: "couriers",
        url: "/couriers",
    },
    {
        title: "Пресс-центр",
        alias: "press",
        url: "/press",
    },
    {
        title: "Контакты",
        alias: "contacts",
        url: "/contacts",
    },
];

export const socialLinks = [
    {
        linkPath: new URL('@/assets/images/social/instagram-icon.svg', import.meta.url).href,
        alt: "instagram-icon",
        alias: "instagram",
        url: "",
    },
    {
        linkPath: new URL('@/assets/images/social/facebook-icon.svg', import.meta.url).href,
        alt: "facebook-icon",
        alias: "facebook",
        url: "",
    },
    {
        linkPath: new URL('@/assets/images/social/vk-icon.svg', import.meta.url).href,
        alt: "vk-icon",
        alias: "",
        url: "vk",
    },
];