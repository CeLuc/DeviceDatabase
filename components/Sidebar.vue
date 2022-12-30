<script setup>
const route = useRoute()
const { signOut } = useSession()
const { width } = useWindowSize()
const collapse = useState('collapse', () => false)
const collapsed = useState('collapsed', () => false)

watchEffect(
  () => (collapsed.value = !!(collapse.value === true || width.value < 1440))
)

const handleClick = async (link) => {
  await navigateTo({ path: link })
}

const handleLogout = () => {
  signOut()
}

const SidebarItems = [
  {
    name: 'Dashboard',
    link: '/',
    icon: 'category',
  },
  {
    name: 'Devices',
    link: '/devices',
    icon: 'chart',
  },
  {
    name: 'Assets',
    link: '/assets',
    icon: 'ticket',
  },
  {
    name: 'Reports',
    link: '/reports',
    icon: 'calendar',
  },
  {
    name: 'Documentations',
    link: '/docs',
    icon: 'document',
  },
  {
    name: 'Messages',
    link: '/messages',
    icon: 'activity',
  },
  {
    name: 'Notifications',
    link: '/notifications',
    icon: 'notification',
  },
]
</script>

<template>
  <div
    class="relative w-full h-full min-h-screen transition-all duration-500 ease-out rounded-r-lg bg-light-neutral dark:bg-dark-grey"
    :class="[collapsed ? 'max-w-[80px]' : 'max-w-[250px]']"
  >
    <div class="flex h-6 mt-9">
      <h1
        class="absolute w-fit mx-auto left-0 right-0 text-3xl font-semibold transition-all duration-[0s]"
        :class="[collapsed ? 'opacity-0 delay-[0s]' : 'opacity-100 delay-500']"
      >
        Device Database
      </h1>
      <h1
        class="absolute w-fit left-0 right-0 mx-auto text-3xl font-semibold transition-all duration-[0s]"
        :class="[collapsed ? 'opacity-100 delay-[0s]' : 'opacity-0 delay-500']"
      >
        DDB
      </h1>
    </div>
    <div class="w-full mt-7">
      <ul class="flex flex-wrap pr-3 space-y-1">
        <li
          v-for="item in SidebarItems"
          :key="item.name"
          class="relative flex w-full h-8 duration-100 cursor-pointer group transition-color hover:duration-300"
          :class="{
            'fill-light-primary/90 text-light-primary/90 dark:fill-dark-primary/90 dark:text-dark-primary/90 hover:fill-light-primary hover:text-light-primary hover:dark:fill-dark-primary hover:dark:text-dark-primary':
              route.fullPath == item.link,
            'fill-light-text/40 text-light-text/50 dark:fill-dark-neutral/40 dark:text-dark-neutral/50 hover:fill-light-text/60 hover:text-light-text/70 hover:dark:fill-dark-neutral/60 hover:dark:text-dark-neutral/70':
              route.fullPath != item.link,
          }"
          @click="handleClick(item.link)"
          @keypress.enter="handleClick(item.link)"
        >
          <div
            :class="{ hidden: route.fullPath != item.link }"
            class="absolute w-full h-full duration-100 transition-color hover:duration-300 group-hover:bg-light-text-light/10 bg-light-text-light/20 dark:group-hover:bg-dark-neutral/10 rounded-r-md dark:bg-dark-neutral/20"
          />
          <div
            class="bottom-0 flex"
            :class="[collapsed ? 'w-full ml-3' : 'ml-6']"
          >
            <div class="my-auto" :class="[!collapsed ? '' : 'mx-auto']">
              <IconCategory v-if="item.icon == 'category'" />
              <IconChart v-else-if="item.icon == 'chart'" />
              <IconTicket v-else-if="item.icon == 'ticket'" />
              <IconDocument v-else-if="item.icon == 'calendar'" />
              <IconCalendar v-else-if="item.icon == 'document'" />
              <IconActivity v-else-if="item.icon == 'activity'" />
              <IconNotification v-else-if="item.icon == 'notification'" />
            </div>
            <div
              :class="[
                collapsed
                  ? 'opacity-0 w-0 delay-[0s]'
                  : 'opacity-100 ml-3 my-auto w-auto delay-500',
              ]"
            >
              <p class="text-xl leading-none">
                {{ item.name }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="absolute flex w-full"
      :class="[collapsed ? 'bottom-9' : 'bottom-6']"
    >
      <div class="flex h-7" :class="[collapsed ? 'mx-auto' : 'px-5']">
        <div
          class="flex items-center w-full h-full"
          :class="[collapsed ? 'flex-wrap' : null]"
        >
          <div
            class="overflow-hidden rounded aspect-square h-7 w-7"
            :class="[collapsed ? 'mx-auto' : 'mr-2']"
          >
            <img
              src="https://picsum.photos/seed/1672221742004/300/300"
              alt=""
            />
          </div>
          <div
            class="mr-3 duration-[0s]"
            :class="[
              collapsed
                ? 'scale-0 h-0 delay-[0s]'
                : 'scale-100 h-auto mr-3 delay-500',
            ]"
          >
            <p class="leading-5">Lucas Gruber</p>
            <p
              class="text-sm font-light leading-5 text-light-text/50 dark:text-dark-neutral/50"
              @click="collapse = !collapse"
              @keyup.enter="collapse = !collapse"
            >
              Azubi - 2LJ
            </p>
          </div>
          <div :class="[collapsed ? 'mx-auto mt-4' : null]">
            <button type="button" @click="handleLogout">
              <IconLogout
                class="w-4 h-4 fill-light-text dark:fill-dark-neutral"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
