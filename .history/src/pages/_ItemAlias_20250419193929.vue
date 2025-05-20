<template>
    <p>12345</p>
</template>

<script>
import restArray from '../seeders/restArray.json';

export default {
    data() {
        return {
            restitem: null,
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