<template>
    <table class="table">
        <thead>
            <th>Data table</th>
        </thead>
        <tbody>
            <r-row class="r-row">
                <template v-slot:default="{ item }">
                    <r-cell :item="item" class="r-cell">
                        Data for RCell component
                    </r-cell>
                </template>
            </r-row>
        </tbody>
    </table>
</template>

<script>
import RRow from './RRow'
import RCell from './RCell'
export default {
    name: 'RTable',
    components: {
        RCell,
        RRow
    },
}
</script>
<style>
.table {
    width: 50%;
    margin: 0 auto;
    border: 1px solid black;
}

.r-cell {
    border: 1px solid red;
}
</style>