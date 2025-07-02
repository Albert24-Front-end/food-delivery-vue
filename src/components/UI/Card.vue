<template>
    <router-link v-if="link" :to="`/product/${id}`" class="products__card card">
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
                        <img :src="vectorIconUrl" alt="rating icon"> <slot name="rating"></slot>
                    </div>
                    <slot name="price"></slot>
                    <slot name="type"></slot>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { watch, ref, computed } from 'vue'
const props = defineProps({
  title: { type: String, required: true },
  time: { type: Number, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String },
  id: { type: Number, required: true },
})

const resolvedImageUrl = computed(()=>{
    return new URL(`../../assets/images/rests/${props.image}`, import.meta.url).href;
})
const vectorIconUrl = computed(()=>{
    return new URL('../../assets/images/Vector.svg', import.meta.url).href;
})
</script>
    // export default {
    //     props: {
            // title: {
            //     type: String,
            //     required: true
            // },
            // time: {
            //     type: Number,
            //     required: true
            // },
            // rating: {
            //     type: Number,
            //     required: true
            // },
            // price: {
            //     type: Number,
            //     required: true
            // },
            // type: {
            //     type: String,
            //     required: true
            // },
            // image: {
            //     type: String,
            //     required: true
            // },
            // link: {
            //     type: String,
            // }
    //     },
    //     computed: {
    //         resolvedImageUrl() {
    //             return new URL(`../../assets/images/rests/${this.image}`, import.meta.url).href;
    //         },
    //         vectorIconUrl() {
    //             return new URL('../../assets/images/Vector.svg', import.meta.url).href;
    //         }
    //     }
    // }