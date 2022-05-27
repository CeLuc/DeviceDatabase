<script>
import { useQuery } from "@vue/apollo-composable";
import { GET_POSTS } from "@/api/queries";
</script>

<template>
  <div>
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
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
