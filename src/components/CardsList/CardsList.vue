<script setup lang="ts">
import Card from "@/components/Card/Card.vue";
import { IProduct } from "@/types/types";

const props = defineProps<{
    productList: IProduct[];
}>()

</script>

<template>
    <div class="row cards-list p-lg-5 p-4" v-if="props.productList.length">
        <div class="offset-lg-1 col-lg-10 col-12">
            <div class="cards-list__row row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
                <div class="col" v-for="product in props.productList" :key="product.name">
                    <Card :productData="product" />
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "./CardsList.scss";
</style>
