<template>
    <nav class="nav">
        <ul class="nav__list">
            <li v-for="item in navItems" class="nav__list__item">{{ item.label }}</li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const navItems = ref([
    {
        idx: 0,
        label: '일반시사',
        value: 'General',
    },
    {
        idx: 1,
        label: '비즈니스',
        value: 'Business',
    },
    {
        idx: 2,
        label: '엔터테인먼트',
        value: 'Entertainment',
    },
    {
        idx: 3,
        label: '건강',
        value: 'Health',
    },
    {
        idx: 4,
        label: '과학',
        value: 'Science',
    },
    {
        idx: 5,
        label: '스포츠',
        value: 'Sports',
    },
    {
        idx: 6,
        label: '테크놀리지',
        value: 'Technology',
    },
])
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
