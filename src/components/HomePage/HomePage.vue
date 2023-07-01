<script setup lang="ts">
import { reactive, watch } from 'vue';

import { productListning, searchProducts } from '@/services/getProducts';
import { IProduct, ISortOrder } from '@/types/types';

import Header from '@/components/Header/Header.vue';
import Search from '@/components/Search/Search.vue';
import CardsList from '@/components/CardsList/CardsList.vue';
import { debounce } from 'lodash';

const state = reactive<{
    products: IProduct[];
    searchValue: string;
    sortOrder: ISortOrder[];
}>({
    products: [],
    searchValue: '',
    sortOrder: [{ order: 'asc', text: 'Najtańsze' }, { order: 'desc', text: 'Najdroższe' }]
});

const fetchProducts = debounce(async () => {
    //@ts-ignore
    state.products = !!state.searchValue.length ? await searchProducts(state.sortOrder[0].order, state.searchValue) : await productListning(state.sortOrder[0].order);
}, 200);

const changeSortOrder = () => {
    state.sortOrder = state.sortOrder.reverse();
    fetchProducts();
};

watch(() => state.searchValue, () => {
    fetchProducts();
}, { immediate: true });
</script>

<template>
    <div class="shopware-layout container-fluid">
        <Header :changeSortOrder="changeSortOrder" :sortOrderText="state.sortOrder[0].text" />
        <Search v-model="state.searchValue" />
        <CardsList :productList="state.products" />
    </div>
</template>

<style lang="scss">
@import "./HomePage.scss";
</style>