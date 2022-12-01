<template>
  <div class="flex flex-wrap mt-1.5">
    <div v-for="(month, key) in months" :key="key" class="w-1/2 px-0.5">
      <span class="flex rounded-md mt-1.5">
        <button
          type="button"
          class="block w-full px-3 py-2 text-xs font-medium leading-6 tracking-wide uppercase transition-colors border border-transparent rounded-md bg-bg-tertiary 2xl:text-sm text-text-primary hover:bg-bg-primary focus:bg-bg-secondary focus:border-primary focus:outline-none"
          v-text="month"
          @click="$emit('update:month', key)"
        ></button>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LitepieMonth",
  props: {
    months: Array,
  },
  inheritAttrs: false,
  emits: ["update:month"],
});
</script>
