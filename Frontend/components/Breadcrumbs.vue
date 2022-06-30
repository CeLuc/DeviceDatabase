<script setup>
const router = useRouter();
</script>
<template>
  <div class="flex items-center ml-4">
    <div
      class="flex items-center pb-6 overflow-y-auto uppercase whitespace-nowrap"
    >
      <NuxtLink
        to="/"
        class="flex items-center text-text-secondary hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
        <span class="ml-2">Home</span>
      </NuxtLink>

      <div
        v-for="item in router.currentRoute.value.matched"
        :key="item.path"
        class="contents group"
      >
        <div class="contents" v-if="item.name != 'index'">
          <span class="mx-5 text-text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <NuxtLink
            :to="item.path"
            class="text-text-secondary hover:underline group-last:text-text-active"
          >
            {{ item.path.substring(item.path.lastIndexOf("/") + 1) }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
