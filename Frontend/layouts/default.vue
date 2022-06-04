<template>
  <div
    class="flex flex-row min-h-screen text-gray-700 bg-gray-100 dark:bg-[#101010] dark:text-gray-200"
  >
    <Sidebar />
    <main
      class="flex flex-col flex-grow transition-all duration-150 ease-in -ml-72 main md:ml-0"
    >
      <Header />
      <div class="flex flex-col flex-grow p-4 main-content">
        <slot />
      </div>
    </main>
  </div>
</template>
