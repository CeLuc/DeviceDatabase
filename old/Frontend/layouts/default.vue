<template>
  <div class="flex flex-row min-h-screen text-text-primary bg-bg-primary">
    <Sidebar />
    <main
      class="flex flex-col flex-grow transition-all duration-150 ease-in -ml-72 main md:ml-0"
    >
      <Header />
      <div class="flex flex-col flex-grow p-4">
        <Breadcrumbs />
        <div class="mx-10 prose dark:prose-invert max-w-none">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
