import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      account {
        id
        email
      }
      errors {
        attribute
        message
      }
    }
  }
`;