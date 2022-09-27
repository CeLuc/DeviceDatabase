<template>
  <div
    class="flex justify-between items-center px-2 py-1.5 rounded-md border border-black/[.1]"
  >
    <div class="flex-shrink-0">
      <span
        v-show="panel.calendar || panel.year"
        class="inline-flex rounded-full"
      >
        <button
          type="button"
          class="p-1.5 rounded-full bg-bg-tertiary text-litepie-secondary-600 transition-colors border border-transparent hover:bg-bg-primary focus:bg-bg-secondary focus:border-primary focus:outline-none"
          @click="
            panel.calendar ? calendar.onPrevious() : calendar.onPreviousYear()
          "
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="
                panel.calendar
                  ? `M15 19l-7-7 7-7`
                  : `M11 19l-7-7 7-7m8 14l-7-7 7-7`
              "
            ></path>
          </svg>
        </button>
      </span>
    </div>
    <div class="px-1.5 space-x-1.5 flex flex-1">
      <span class="flex flex-1 rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-bg-tertiary text-xs 2xl:text-sm tracking-wide text-litepie-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-bg-primary hover:text-litepie-secondary-900 focus:bg-bg-secondary focus:border-primary focus:outline-none uppercase"
          v-text="calendar.month"
          @click="calendar.openMonth()"
        ></button>
      </span>
      <span class="flex flex-1 rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-bg-tertiary text-xs 2xl:text-sm tracking-wide text-litepie-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-bg-primary hover:text-litepie-secondary-900 focus:bg-bg-secondary focus:border-primary focus:outline-none uppercase"
          v-text="calendar.year"
          @click="calendar.openYear()"
        ></button>
      </span>
    </div>
    <div class="flex-shrink-0">
      <span
        v-show="panel.calendar || panel.year"
        class="inline-flex rounded-full"
      >
        <button
          type="button"
          class="p-1.5 rounded-full bg-bg-tertiary text-litepie-secondary-600 transition-colors border border-transparent hover:bg-bg-primary focus:bg-bg-secondary focus:border-primary focus:outline-none"
          @click="panel.calendar ? calendar.onNext() : calendar.onNextYear()"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="panel.calendar ? `M9 5l7 7-7 7` : `M13 5l7 7-7 7M5 5l7 7-7 7`"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LitepieHeader",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object,
  },
  inheritAttrs: false,
});
</script>
