<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="x in props.chunk" :key="x"></th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>
<script setup>

const props=defineProps({
    chunk:{
        type:Number,
        default:25,
    }
})
</script>
<style lang="scss" scoped> 
.table{
    thead{
        th{
            width:calc(100% / v-bind("props.chunk"));
            border: 0;
            padding: 0;
        }
    }

}
</style>