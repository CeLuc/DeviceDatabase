import { gql } from "@apollo/client/core";

export const DEL_PC = gql`
  mutation DelPc($id: ID, $hostname: String) {
    delPc(id: $id, hostname: $hostname) {
      id
      hostname
    }
  }
`;
