import { gql } from "@apollo/client/core";

export const GET_PCS = gql`
  query get_pcs {
    pcs {
      id
      hostname
      ip
      room {
        name
      }
      network {
        name
      }
      house {
        number
      }
    }
  }
`;
export const GET_NETWORKS = gql`
  query get_networks {
    network {
      id
      hostname
      ip
      room {
        name
      }
      pcs {
        name
      }
      house {
        number
      }
    }
  }
`;
