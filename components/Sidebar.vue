<template>
  <div
    class="relative w-2/12 h-full min-h-screen bg-light-neutral dark:bg-dark-grey"
  >
    <div class="flex mt-9">
      <h1 class="mx-auto text-3xl font-semibold">Device Database</h1>
    </div>
    <div class="w-full mt-7">
      <ul class="flex flex-wrap pr-6 space-y-1">
        <li
          v-for="item in SidebarItems"
          class="relative flex w-full h-8 duration-100 cursor-pointer group transition-color hover:duration-300"
          :class="{
            'fill-light-primary/90 text-light-primary/90 dark:fill-dark-primary/90 dark:text-dark-primary/90 hover:fill-light-primary hover:text-light-primary hover:dark:fill-dark-primary hover:dark:text-dark-primary':
              route.fullPath == item.link,
            'fill-light-text/40 text-light-text/50 dark:fill-dark-neutral/40 dark:text-dark-neutral/50 hover:fill-light-text/60 hover:text-light-text/70 hover:dark:fill-dark-neutral/60 hover:dark:text-dark-neutral/70':
              route.fullPath != item.link,
          }"
        >
          <div
            :class="{ hidden: route.fullPath != item.link }"
            class="absolute w-full h-full duration-100 transition-color hover:duration-300 group-hover:bg-light-text-light/10 bg-light-text-light/20 dark:group-hover:bg-dark-neutral/10 rounded-r-md dark:bg-dark-neutral/20"
          />
          <div class="bottom-0 flex ml-6">
            <div class="my-auto">
              <IconCategory v-if="item.icon == 'category'" />
              <IconCategory v-else-if="item.icon == 'chart'" />
              <IconCategory v-else-if="item.icon == 'ticket'" />
              <IconCategory v-else-if="item.icon == 'calendar'" />
              <IconCategory v-else-if="item.icon == 'document'" />
              <IconCategory v-else-if="item.icon == 'activity'" />
              <IconCategory v-else-if="item.icon == 'notification'" />
            </div>
            <div class="my-auto ml-3">
              <p class="text-xl leading-none">{{ item.name }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const SidebarItems = [
  {
    name: "Dashboard",
    link: "/",
    icon: "category",
  },
  {
    name: "Devices",
    link: "/devices",
    icon: "chart",
  },
  {
    name: "Assets",
    link: "/assets",
    icon: "ticket",
  },
  {
    name: "Reports",
    link: "/reports",
    icon: "calendar",
  },
  {
    name: "Documentations",
    link: "/docs",
    icon: "document",
  },
  {
    name: "Messages",
    link: "/messages",
    icon: "activity",
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: "notification",
  },
];
</script>
