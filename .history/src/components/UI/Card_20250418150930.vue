<template>
    <a href="./goods.html" class="products__card card">
        <div class="products-card__image">
            <img :src="resolvedImageUrl" :alt="title">
        </div>
        <div class="products-card__description">
            <div class="products-card__description-row">
                <slot name="title"></slot>
                <slot name="time"></slot>
            </div>
            <div class="products-card__description-row">
                <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                        <img :src="vectorIconUrl" alt="rating icon"><slot></slot>
                    </div>
                    <div class="products-card__description-info--price">От {{ price }} ₽</div>
                    <div class="products-card__description-info--group">{{ type }}</div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            time: {
                type: Number,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
        },
        computed: {
            resolvedImageUrl() {
                return new URL(`../../assets/images/rests/${this.image}`, import.meta.url).href;
            },
            vectorIconUrl() {
                return new URL('../../assets/images/Vector.svg', import.meta.url).href;
            }
        }
    }
</script>