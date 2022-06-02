<script>
import { useQuery } from "@vue/apollo-composable";
import { GET_PCS } from "@/api/queries";
export default {
  setup() {
    const { result } = useQuery(GET_PCS);
    return { result };
  },
};

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <div>Device Datenbank</div>
    <table class="prose dark:prose-invert">
      <thead>
        <tr class="text-lg">
          <th>pc</th>
          <th>room</th>
          <th>Network</th>
          <th>House</th>
        </tr>
      </thead>
      <tbody v-if="result">
        <tr
          class="odd:bg-white even:bg-slate-400 dark:odd:bg-[#303030] dark:even:bg-[#202020]"
          v-for="pc in result.pcs"
          :key="pc.hostname"
        >
          <td>{{ pc.hostname }}</td>
          <td>{{ pc.room.name }}</td>
          <td>{{ pc.network.name }}</td>
          <td>{{ pc.house.number }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
