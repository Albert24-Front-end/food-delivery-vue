<template>
    <div class="wrapper container">
        <div v-if="restItem" class="products__card card">
            <div class="products-card__image">
                <img :src="restItem.image" :alt="restItem.title">
            </div>
            <div class="products-card__description">
                <div class="products-card__description-row">
                    <h4 class="products-card__description-title">{{ restItem.title }}</h4>
                    <div class="products-card__description-bage">{{ restItem.time }} мин</div>
                </div>
                <div class="products-card__description-row">
                    <div class="products-card__description-info">
                        <div class="products-card__description-info--rating">
                            <img :src="vectorIconUrl" alt="rating icon"> {{ restItem.rating }}
                        </div>
                        <div class="products-card__description-info--price">От {{ restItem.price }} ₽</div>
                        <div class="products-card__description-info--group">{{ restItem.type }}</div>
                    </div>
                </div>
            </div>
            <div class="products-card__link">
                <router-link to="/">Назад на главную</router-link>
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
                return new URL(`../../assets/images/rests/${restItem.image}`, import.meta.url).href;
            },
            vectorIconUrl() {
                return new URL('../../assets/images/Vector.svg', import.meta.url).href;
            }
    }
}
</script>