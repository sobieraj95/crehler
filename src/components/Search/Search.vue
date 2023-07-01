<script setup lang="ts">
import { useAttrs } from 'vue'
import Arrow from '@/assets/icons/Arrow.vue';
const attrs = useAttrs() as {
  modelValue: string;
  'onUpdate:modelValue': (value: string) => void;
};

const handleInput = (target: HTMLInputElement) => {
  attrs['onUpdate:modelValue'](target.value || '')
} 
</script>

<template>
  <div class="search row justify-content-center align-items-center">
    <div class="col-md-5 col-sm-8 col-10">
      <div class="search__input-group">
        <input class="search__input" :value="attrs.modelValue"
          @input="({ target }) => handleInput(target as HTMLInputElement)" placeholder="Szukaj...">
        <Arrow class="search__input-icon" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./Search.scss";
</style>
