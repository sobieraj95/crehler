<script setup lang="ts">
defineProps<{
    productData: any;
}>();
</script>

<template>
    <div class="product-card">
        <span class="product-card__name">{{ productData.name }}</span>
        <span class="product-card__desc">{{ productData.description }}</span>
        <span class="product-card__price"><b>Cena:</b> {{ productData.price }} zł</span>
    </div>
</template>

<style lang="scss">
@import "./Card.scss";
</style>
