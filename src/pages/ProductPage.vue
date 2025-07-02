    <template>
    <div class="container">
        <div>2133212312312</div>
        <div class="products-card-row">
            <div class="product-card-col">
                <div class="products-card__image">
                    <img :src="resolvedImageUrl" :alt="qwerty">
                </div>
            </div>
            <div class="product-card-col">

            </div>
        </div>
        <!-- <div v-if="restItem" class="products__card card">
            <div class="products-card__image">
                <img :src="resolvedImageUrl" :alt="restItem.title">
            </div>
            <div class="products-card__description">
                <div class="products-card__description-row">
                    <h4 class="products-card__description-title">{{ restItem.title }}</h4>
                    <div class="products-card__description-bage">{{ restItem.time }} мин</div>
                </div>
                <div class="products-card__description-row">
                    <div class="products-card__description-info">
                        <div class="products-card__description-info--rating">
                            <img :src="vectorIconUrl" alt="rating icon"> {{ restItem.rating }}
                        </div>
                        <div class="products-card__description-info--price">От {{ restItem.price }} ₽</div>
                        <div class="products-card__description-info--group">{{ restItem.type }}</div>
                    </div>
                </div>
            </div>
            <div class="products-card__link">
                <router-link to="/">Назад на главную</router-link>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import restArray from '../seeders/restArray.json';
import { watch, ref, computed } from 'vue'

const props = defineProps({
  title: { type: String, required: false },
  time: { type: Number, required: false },
  rating: { type: Number, required: false },
  price: { type: Number, required: false },
  type: { type: String, required: false },
  image: { type: String, required: false },
  link: { type: String },
  id: { type: Number, required: false },
})

const resolvedImageUrl = computed(()=>{
    return new URL(`../../assets/images/rests/${props.image}`, import.meta.url).href;
})
const vectorIconUrl = computed(()=>{
    return new URL('../../assets/images/Vector.svg', import.meta.url).href;
})

// export default {
//     data() {
//         return {
//             restItem: null,
//         }
//     },
//     created() {
//         const alias = this.$route.params.itemAlias
//         const restItem = restArray.find(el => el.alias === alias)
//         this.restItem = restItem
//         console.log(restItem)
//     },
//     computed: {
//             resolvedImageUrl() {
//                 if (this.restItem?.image) {
//                     return new URL(`/src/assets/images/rests/${this.restItem.image}`, import.meta.url).href; // абсолютный путь
//                 }
//                 return '';
//             },
//             vectorIconUrl() {
//                 return new URL('/src/assets/images/Vector.svg', import.meta.url).href;
//             }
//     }
// }
</script>