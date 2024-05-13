<template>
    <div class="card">
        <div class="card__image-box">
            <img src="" alt="" />
        </div>
        <div class="card__info-box">
            <div class="card__info-box__header">
                <div class="broadcast">
                    <img src="" alt="" class="broadcast__logo" />
                    <span class="broadcast__company">BBC KBS MBC SBS</span>
                </div>
                <div class="title">뉴스 제목</div>
            </div>
            <div class="card__info-box__body">
                <span class="contents"
                    >뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용 뉴스 기사내용
                    뉴스 기사내용
                </span>
            </div>
        </div>
        <div class="card__profile-box">
            <div class="card__profile-box__image-box">
                <img src="@/assets/icons/user.svg" alt="" class="image" />
            </div>
            <div class="card__profile-box__detail">
                <span class="name">9Diin</span>
                <span class="date">2024년 05월 14일</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" coped>
.card {
    @include flexbox(flex-start, center);
    flex-direction: column;

    width: calc(360px - 48px);
    height: 400px;

    padding: 24px !important;
    gap: 24px;

    // background-color: $color-black-700; // 다크모드
    background-color: $color-white-000;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border: 0.5px solid $color-gray-000;
    border-radius: 16px;

    cursor: pointer;

    &__image-box {
        width: 100%;
        height: 192px;

        background-color: beige;
        border-radius: 12px;
    }
    &__info-box {
        @include flex-center;
        flex-direction: column;
        flex: 1;

        width: 100%;

        gap: 12px;

        &__header {
            @include flexbox(center, flex-start);
            flex-direction: column;

            width: 100%;

            .broadcast {
                @include flexbox(center, flex-start);
                width: 100%;

                gap: 8px;

                &__logo {
                    width: 20px;
                    height: 20px;

                    border-radius: 50%;
                    background-color: white;
                }
                &__company {
                    @include flex-center;
                    font-size: 12px;
                    color: $color-black-700;
                }
            }
            .title {
                @include flexbox(center, flex-start);
                width: 100%;

                color: $color-black-700;
            }
        }
        &__body {
            .contents {
                font-size: 14px;
                color: $color-gray-350;
            }
        }
    }
    &__profile-box {
        @include flexbox(center, flex-start);
        width: 100%;
        height: 40px;

        gap: 12px;

        &__image-box {
            @include flex-center;

            .image {
                width: 32px;
                height: 32px;

                border-radius: 50%;
            }
        }
        &__detail {
            @include flexbox(flex-start, center);
            flex-direction: column;

            .name {
                font-size: 12px;
                color: $color-black-700;
            }
            .date {
                font-size: 12px;
                color: $color-gray-350;
            }
        }
    }
}
</style>
