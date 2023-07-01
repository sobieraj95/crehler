<script setup lang="ts">
import Arrow from '@/assets/icons/Arrow.vue';
const props = defineProps<{
  sortOrderText: string;
  changeSortOrder: () => void;
}>()
</script>
<template>
  <div class="header row justify-content-center align-items-center">
    <div class="col-lg-10 col-12">
      <div class="row justify-content-between align-items-center">
        <p class="header__title col-sm-6 col-6">Shopware Listning</p>
        <div class="col-sm-6 col-6 d-flex justify-content-end">
          <button type="button" class="header__sorting-button btn btn-outline-secondary d-flex justify-content-between align-items-center" @click="props.changeSortOrder">
            <span class="header__button-text">{{ sortOrderText }}</span>
            <Arrow class="header__button-icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Header.scss";
</style>
