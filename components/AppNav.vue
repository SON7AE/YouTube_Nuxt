<template>
    <nav class="nav">
        <!-- 방법01: 템플릿 참조 ref를 활용하는 방법 -->
        <ul class="nav__list">
            <li v-for="item in navItems" class="nav__list__item">
                <NuxtLink :to="item.path">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import type { Nav } from "../types/nav";

const navItems = ref<Nav[]>([
    {
        idx: 0,
        label: "일반시사",
        value: "General",
        path: "general",
    },
    {
        idx: 1,
        label: "비즈니스",
        value: "Business",
        path: "business",
    },
    {
        idx: 2,
        label: "엔터테인먼트",
        value: "Entertainment",
        path: "entertainment",
    },
    {
        idx: 3,
        label: "건강",
        value: "Health",
        path: "health",
    },
    {
        idx: 4,
        label: "과학",
        value: "Science",
        path: "science",
    },
    {
        idx: 5,
        label: "스포츠",
        value: "Sports",
        path: "sports",
    },
    {
        idx: 6,
        label: "테크놀리지",
        value: "Technology",
        path: "technology",
    },
]);
</script>

<style lang="scss" scoped>
.nav {
    @include flex-center;
    width: 100%;

    margin-top: 88px;

    &__list {
        @include flex-center;
        list-style: none;
        width: 100%;

        gap: 24px;

        &__item {
            @include flex-center;

            padding: 6px 12px;

            background-color: $color-gray-200;
            border-radius: 20px;
            color: $color-black-700;

            cursor: pointer;
        }
    }
}
</style>
