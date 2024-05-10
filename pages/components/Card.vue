<template>
    <div class="card">
        <div class="card__image-box">
            <img src="" alt="" />
        </div>
        <div class="card__info-box">
            <div class="card__info-box__header">
                <div class="broadcast">
                    <img src="" alt="" class="broadcast__logo" />
                    <span class="broadcast__company"></span>
                </div>
                <div class="title">뉴스 제목</div>
            </div>
            <div class="card__info-box__body">
                <span></span>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" coped>
.card {
    @include flex-center;
    flex-direction: column;

    width: 312px;

    padding: 24px;
    gap: 24px;

    // background-color: $color-black-700; // 다크모드
    background-color: $color-white-000;
    box-shadow: rgba(0,0,0,0.2))
    border: 0.5px solid $color-gray-200;
    border-radius: 16px;

    &__image-box {
        width: 100%;
        height: 192px;

        background-color: aqua;
        border-radius: 12px;
    }
    &__info-box {
        @include flex-center;
        flex-direction: column;

        width: 100%;
        height: 140px;

        background-color: aqua;

        &__header {
            @include flexbox('center', 'flex-start');
            flex-direction: column;

            width: 100%;

            .broadcast {
                @include flexbox('center', 'flex-start');
                width: 100%;

                &__logo {
                }
            }
            .title {
                @include flexbox('center', 'flex-start');
                width: 100%;

                color: $color-white-000;
            }
        }
    }
}
</style>
