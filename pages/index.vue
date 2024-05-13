<template>
    <div class="page">
        <!-- {{ data?.articles }} -->
        <CardUI v-for="article in data?.articles" :key="article.url" />
    </div>
</template>

<script setup lang="ts">
import CardUI from "./components/Card.vue";
import type { Api } from "../types/api";

const API_KEY = "ce4c280c9dff4ac0a98c9d7ea869194d";
const API_URL = `https://newsapi.org/v2/everything?q=Apple&from=2024-05-09&sortBy=popularity&apiKey=${API_KEY}`;
const { data, pending, error, refresh } = await useAsyncData<Api>("getNews", () => $fetch(API_URL));
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
