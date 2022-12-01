<template>
  <div class="flex flex-wrap">
    <div v-for="(year, key) in years" :key="key" class="w-1/2 px-0.5">
      <span class="flex rounded-md mt-1.5">
        <button
          type="button"
          class="block w-full px-3 py-2 text-xs font-medium leading-6 tracking-wide uppercase transition-colors border border-transparent rounded-md bg-bg-tertiary 2xl:text-sm text-text-primary hover:bg-bg-primary focus:bg-bg-secondary focus:border-primary focus:outline-none"
          v-text="year"
          @click="$emit('update:year', year, asPrevOrNext)"
        ></button>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LitepieYear",
  props: {
    asPrevOrNext: Boolean,
    years: Array,
  },
  inheritAttrs: false,
  emits: ["update:year"],
});
</script>
