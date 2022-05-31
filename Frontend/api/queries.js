import { gql } from "@apollo/client/core";

export const GET_POSTS = gql`
  query get_posts {
    pcs {
      id
      hostname
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
