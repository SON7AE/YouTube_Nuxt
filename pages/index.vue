<template>
    <div class="page">
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
    </div>
</template>

<script setup lang="ts">
import CardUI from './components/Card.vue'
import { useStore } from '~/stores/api'

const store = useStore()
const news = await useAsyncData('news', () => store.getNews())
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>
