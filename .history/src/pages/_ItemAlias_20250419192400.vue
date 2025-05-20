<template>
    <p>12345</p>
</template>

<script>
import items
export default {
    data() {
        return {
            item: null,
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
    }
}
</script>