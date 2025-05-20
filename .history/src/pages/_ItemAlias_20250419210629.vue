<template>
    <div class="wrapper">
        <div v-if="restItem" class="products__card card">
            <div class="products-card__image">
                <img :src="resolvedImageUrl" :alt="title">
            </div>
            <div class="products-card__description">
                <div class="products-card__description-row">
                    <h4 class="products-card__description-title">{{ rest.title }}</h4>
                    <div class="products-card__description-bage">{{ rest.time }} мин</div>
                </div>
                <div class="products-card__description-row">
                    <div class="products-card__description-info">
                        <div class="products-card__description-info--rating">
                            <img src="./images/Vector.svg" alt=""> 4.5
                        </div>
                        <div class="products-card__description-info--price">От 900 ₽</div>
                        <div class="products-card__description-info--group">Пицца</div>
                    </div>
                </div>
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