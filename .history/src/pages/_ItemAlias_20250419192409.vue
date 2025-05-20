<template>
    <p>12345</p>
</template>

<script>
import restArra
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