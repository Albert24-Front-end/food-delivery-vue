<template>
    <div class="wrapper">
        <div v-if="restItem">
            <div class="products-card__image">
                <img :src="resolvedImageUrl" :alt="title">
            </div>
        </div>
    </div>
</template>

<script>
import restArray from '../seeders/restArray.json';

export default {
    data() {
        return {
            restItem: null,
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
        const restItem = restArray.find(el => el.alias === alias)
        this.restItem = restItem
        console.log(restItem)
    },
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
            link: {
                type: String,
            }
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