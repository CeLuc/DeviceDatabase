<template>
  <div>Logout</div>
</template>
<script setup>
definePageMeta({
  middleware: () => {
    if (process.client) {
      localStorage.removeItem("authToken");
      return "/login";
    }
  },
});
</script>
