<script>
import { useQuery, useMutation } from "@vue/apollo-composable";
import { GET_NETWORKS } from "@/api/queries";
import { DEL_NETWORKS } from "@/api/mutations";
export default {
  setup() {
    const { result } = useQuery(GET_NETWORKS);
    const { mutate: delNetwork } = useMutation(DEL_NETWORKS);
    const router = useRouter();
    return { result, delNetwork, router };
  },
};
</script>
