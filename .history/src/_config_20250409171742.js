export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "http://localhost:5173/" : "https://tocode.ru",
};

export const app = {
    logoLink: "../assets/images/logo.png",
};

export const links = [
    {
        title: "Ресторанам",
        alias: "restaurants",
        url: "/",
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