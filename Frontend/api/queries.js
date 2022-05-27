import { gql } from "@apollo/client/core";

export const GET_POSTS = gql`
  query get_posts {
    pcs {
      hostname
    }
  }
`;
