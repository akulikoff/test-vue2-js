<template>
    <tr>
        <slot :item="items"></slot>
    </tr>
</template>
<script>
export default {
    name: 'RRow',
    data() {
        return {
            items: [],
        }
    }
}
</script>