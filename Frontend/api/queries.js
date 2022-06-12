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
