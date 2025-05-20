<template>
    <a href="./goods.html" class="products__card card">
        <div class="products-card__image">
            <img src="./images/rests/tanuki.jpg" alt="tanuki">
        </div>
        <div class="products-card__description">
            <div class="products-card__description-row">
                <h4 class="products-card__description-title">{{ title }}</h4>
                <div class="products-card__description-bage">{{ time }} мин</div>
            </div>
            <div class="products-card__description-row">
                <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                        <img src="./images/Vector.svg" alt=""> {{ rating }}
                    </div>
                    <div class="products-card__description-info--price">От {{ pr }} ₽</div>
                    <div class="products-card__description-info--group">Пицца</div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>