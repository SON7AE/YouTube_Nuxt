<template>
    <div>
        <CardUI />
    </div>
</template>

<script setup lang="ts">
import CardUI from './components/Card.vue'
import { useStore } from '~/stores/api'

const store = useStore()
const news = await useAsyncData('news', () => store.getNews())
</script>

<style scoped></style>
