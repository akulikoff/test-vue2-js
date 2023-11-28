<template>
    <td>
        <slot :item="items"></slot>
    </td>
</template>
<script>
export default {
    name: 'RCell',
    props: ['items'],
}
</script>

<style></style>