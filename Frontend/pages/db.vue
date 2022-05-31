<script>
import { useQuery } from "@vue/apollo-composable";
import { GET_POSTS } from "@/api/queries";
export default {
  setup() {
    const { result } = useQuery(GET_POSTS);
    return { result };
  },
};

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="">
    <div>This is a DB</div>
    <table class="table-color">
      <thead>
        <tr>
          <th>pc</th>
          <th>room</th>
          <th>Network</th>
          <th>House</th>
        </tr>
      </thead>
      <tbody v-if="result">
        <tr
          class="odd:bg-white even:bg-slate-400"
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
