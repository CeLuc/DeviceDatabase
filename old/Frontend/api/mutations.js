import { gql } from "@apollo/client/core";

export const DEL_PC = gql`
  mutation DelPc($id: ID, $hostname: String) {
    delPc(id: $id, hostname: $hostname) {
      id
      hostname
    }
  }
`;

export const DEL_NETWORKS = gql`
  mutation DelNet($id: ID, $name: String) {
    delNetwork(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DEL_HAUS = gql`
  mutation DelNet($id: ID, $name: String) {
    delNetwork(id: $id, name: $name) {
      id
      name
    }
  }
`;
