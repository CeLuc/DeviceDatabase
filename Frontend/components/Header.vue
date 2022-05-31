<template>
  <header class="px-4 py-4 bg-white shadow dark:bg-black header">
    <div class="flex flex-row items-center header-content">
      <form action="#">
        <div class="relative hidden md:flex">
          <div
            class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            id="search"
            type="text"
            name="search"
            class="w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-900 sm:text-base focus:outline-none focus:border-gray-800"
            placeholder="Search..."
          />
        </div>
        <div class="flex md:hidden">
          <a
            href="#"
            class="flex items-center justify-center w-10 h-10 border-transparent"
          >
            <svg
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
        </div>
      </form>
      <div class="flex ml-auto">
        <NuxtLink to="/profile" class="flex flex-row items-center">
          <img
            src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
            alt=""
            class="w-10 h-10 bg-gray-200 border rounded-full dark:border-primary"
          />
          <span class="flex flex-col ml-2">
            <span class="w-20 font-semibold leading-none tracking-wide truncate"
              >Max Mustermann</span
            >
            <span class="w-20 mt-1 text-xs leading-none text-gray-500 truncate"
              >Admin</span
            >
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
