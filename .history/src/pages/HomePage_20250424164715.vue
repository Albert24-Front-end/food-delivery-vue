<template>
    <main class="main">
      <section class="banner">
            <div class="container">
                <div class="banner-item">
                    <h2 class="banner-item__title">
                        Онлайн-сервис доставки еды на дом
                    </h2>
                    <p class="banner-item__text">
                        Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                    </p>
                </div>
            </div>
        </section>
        <section class="products">
            <div class="container">
                <div class="products-header">
                    <h3 class="products-header__title">Рестораны</h3>
                    <input type="text" placeholder="Поиск блюд и ресторанов" class="products-header__search">
                </div>
                <div class="products-wrapper"  id="rests-container" >
                    <Card v-for="rest in restArray" 
                        :key="rest.id" 
                        :title="rest.title" 
                        :time="rest.time" 
                        :rating="rest.rating" 
                        :price="rest.price" 
                        :type="rest.type" 
                        :image="rest.image"
                        :link="`/${rest.alias}`"
                    >
                        <template v-slot:title><h4 class="products-card__description-title">{{ rest.title }}</h4></template>
                        <template v-slot:time><div class="products-card__description-bage">{{ rest.time }} мин</div></template>
                        <template v-slot:rating>{{ rest.rating }}</template>
                        <template v-slot:price><div class="products-card__description-info--price">От {{ rest.price }} ₽</div></template>
                        <template v-slot:type><div class="products-card__description-info--group">{{ rest.type }}</div></template>
                    </Card>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Card from '@/components/UI/Card.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import restArray from '../seeders/restArray.json';

    export default {
        components: { Card,Header, Footer },
        data() {
            return {
                restArray: restArray,
            };
        },
        methods: {
            increment() {
                this.restArray
            }
        },
        computed: {
            
        }
    };
</script>

<script>
    setup() {
        const _restArray = ref(restArray)

        function increment() {
            _restArray.value = 123123
        }
    }
</script>