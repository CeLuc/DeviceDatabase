<script setup>
defineProps(["name", "color"]);
const isOpen = useState(["isOpen", () => false]);
const router = useRouter();
</script>

<template>
  <li class="my-px text-gray-300 fill-gray-300 group">
    <div
      activeClass="text-gray-700 fill-gray-700 bg-gray-100"
      class="relative z-10 flex flex-row items-center w-full h-10 px-3 transition-all duration-200 rounded-lg hover:ease-in group-hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 hover:fill-gray-700"
      :class="[
        router.currentRoute.value.fullPath.startsWith('/db')
          ? 'text-gray-700 fill-gray-700 bg-gray-100'
          : isOpen
          ? 'bg-gray-700/40'
          : null,
        isOpen ? 'shadow-md' : null,
      ]"
      @click="isOpen = !isOpen"
    >
      <span
        class="flex items-center justify-center text-lg"
        :class="[color != null ? color : 'text-gray-400']"
      >
        <div class="w-6 h-6 fill-current">
          <slot />
        </div>
      </span>
      <span class="ml-3">{{ name }}</span>
      <span
        class="flex items-center justify-center text-lg"
        :class="[color != null ? color : defaultColor]"
      >
        <div
          class="absolute w-8 h-8 transition-transform duration-1000 ease-in-out right-5"
          :class="[isOpen ? '-rotate-90' : 'rotate-0']"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41 -.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42Z"
            />
          </svg>
        </div>
      </span>
    </div>
    <div>
      <ul
        class="relative w-11/12 mx-auto overflow-hidden transition-all duration-1000 ease-in-out"
        :class="[isOpen ? 'h-[164px]' : 'h-0']"
      >
        <div
          class="absolute w-full transition-all duration-1000 ease-in-out bg-gray-700 rounded-b-xl"
          :class="[isOpen ? '-translate-y-0' : '-translate-y-full']"
        >
          <!-- Choose between two Animations (cl: contents) -->
          <!-- <div class="bg-gray-700 rounded-b-xl"> -->
          <slot name="submenus" />
          <!-- </div> -->
        </div>
      </ul>
    </div>
  </li>
</template>
