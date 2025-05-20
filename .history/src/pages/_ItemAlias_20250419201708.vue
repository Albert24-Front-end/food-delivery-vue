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
    }
}
</script>