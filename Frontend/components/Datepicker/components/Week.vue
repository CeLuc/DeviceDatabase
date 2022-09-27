<template>
  <div class="grid grid-cols-7 py-2 mt-0.5 border-b border-black/[.1]">
    <div
      v-for="(day, keyDay) in weeks"
      :key="keyDay"
      class="text-xs font-medium tracking-wide text-center cursor-default text-text-secondary 2xl:text-sm"
    >
      <span v-text="day"> </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LitepieWeek",
  props: {
    weeks: Array,
  },
  inheritAttrs: false,
});
</script>
