<script>
import { useQuery, useMutation } from "@vue/apollo-composable";
import { GET_PCS } from "@/api/queries";
import { DEL_PC } from "@/api/mutations";
export default {
  setup() {
    const { result } = useQuery(GET_PCS);
    const { mutate: delPc } = useMutation(DEL_PC);
    const router = useRouter();
    return { result, delPc, router };
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text);
    },
  },
};
</script>
<template>
  <div class="rounded-sm bg-gray-50 dark:bg-gray-800">
    <div
      class="flex w-full py-5 text-lg text-left uppercase border-t-2 border-b-2 border-gray-600 border-t-transparent"
    >
      <span class="px-10">PC-Datenbank</span>
    </div>
    <div class="px-10">
      <div class="pt-10 pb-5">
        <span>Show</span>
        <select
          name="Entries"
          class="py-1 pl-2 pr-6 mx-1 rounded dark:bg-gray-700"
          id=""
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">20</option>
          <option value="100">100</option>
          <option value="all">All</option>
        </select>
        <span>Items</span>
      </div>
      <table
        class="w-full mx-auto text-sm text-left border-t table-auto border-gray-600/80"
      >
        <thead class="text-xs uppercase">
          <tr>
            <th scope="col" class="relative px-6 py-3">Hostname</th>
            <th scope="col" class="relative px-6 py-3">IP</th>
            <th scope="col" class="relative px-6 py-3">Netzwerk</th>
            <th scope="col" class="relative px-6 py-3">Haus</th>
            <th scope="col" class="relative px-6 py-3">Raum</th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody v-if="result">
          <tr
            class="dark:border-gray-700"
            v-for="(pc, index) in result.pcs"
            :key="pc.hostname"
          >
            <td
              scope="row"
              class="px-6 py-4 font-medium group test dark:text-white whitespace-nowrap after:content-copy after:h-3 after:w-3 after:hover:cursor-pointer after:hidden after:ml-2 after:relative after:justify-center"
            >
              {{ pc.hostname }}
              <div
                class="absolute justify-center hidden w-3 h-3 ml-2 group-hover:inline-block group-hover:cursor-pointer content-copy"
                @click="copy(pc.hostname)"
              ></div>
            </td>
            <td
              scope="row"
              class="px-6 py-4 font-medium group test dark:text-white whitespace-nowrap after:content-copy after:h-3 after:w-3 after:hover:cursor-pointer after:hidden after:ml-2 after:relative after:justify-center"
            >
              {{ pc.ip }}
              <div
                class="absolute justify-center hidden w-3 h-3 ml-2 group-hover:inline-block group-hover:cursor-pointer content-copy"
                @click="copy(pc.ip)"
              ></div>
            </td>
            <td class="test group">
              {{ pc.network.name }}
              <div
                class="absolute justify-center hidden w-3 h-3 ml-2 group-hover:inline-block group-hover:cursor-pointer content-copy"
                @click="copy(pc.network.name)"
              ></div>
            </td>
            <td class="test group">
              Haus {{ pc.house.number }}
              <div
                class="absolute justify-center hidden w-3 h-3 ml-2 group-hover:inline-block group-hover:cursor-pointer content-copy"
                @click="copy(pc.house.number)"
              ></div>
            </td>
            <td class="test group">
              {{ pc.room.name }}
              <div
                class="absolute justify-center hidden w-3 h-3 ml-2 group-hover:inline-block group-hover:cursor-pointer content-copy"
                @click="copy(pc.room.name)"
              ></div>
            </td>
            <td class="w-24 text-center test">
              <div class="flex mr-6 space-x-2">
                <a href="#" class="font-medium hover:underline">
                  <div
                    class="w-5 h-5 duration-200 fill-gray-300 hover:fill-gray-600 transition-color"
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0V0Z" />
                      <path
                        d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z"
                      />
                    </svg>
                  </div>
                </a>
                <div
                  @click="delPc({ id: pc.id }) + result.pcs.splice(index, 1)"
                  class="font-medium duration-200 fill-gray-300 hover:fill-red-600 transition-color hover:cursor-pointer"
                >
                  <div class="w-5 h-5">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0V0Z" />
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM8 9h8v10H8V9Zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.test {
  @apply px-6 py-4 border-t border-gray-600/80;
}
</style>
