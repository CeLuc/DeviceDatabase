<script>
import { useQuery } from "@vue/apollo-composable";
import { GET_POSTS } from "@/api/queries";

export default {
  setup() {
    const { result } = useQuery(GET_POSTS);
    return {
      result,
    };
  },
};
</script>

<template>
  <div class="prose">
    <Nav />
    <div>This is a DB</div>
    <table>
      <thead>
        <tr>
          <th>pc</th>
          <th>room</th>
          <th>Network</th>
          <th>House</th>
        </tr>
      </thead>
      <tbody v-if="result">
        <tr v-for="pc in result.pcs" :key="pc.hostname">
          <td>{{ pc.hostname }}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
