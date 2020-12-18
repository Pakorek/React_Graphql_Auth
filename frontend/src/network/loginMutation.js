import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useCookies } from "react-cookie";
import { useAuthToken } from "../config/auth";

/*
export const loginMutationGQL = gql`
  mutation auth{
    authenticate(password: $password, email: $login) {
      token
    }
  }
`;
*/
export const loginMutationGQL = gql`
  mutation auth{authenticate
  (password: "mdp", email: "test2@mail.com") {
      token
      user {
        email
      }
    }
  }
`;

export const useLoginMutation = () => {
  const [_, setAuthToken, removeAuthtoken] = useAuthToken();
  const [cookies, setCookie, removeCookie] = useCookies(["USER"]);

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      // eslint-disable-next-line no-console
      console.log("on completed", data.authenticate.user.email)
      // console.log(data.authenticate.token);
      setCookie("user", data.authenticate.user.email);
      setAuthToken(data.authenticate.token);
    },
  });

  // full login function
  const login = (user, password) => {
    removeAuthtoken();
    return mutation({
      variables: {
        login: user,
        password,
      },
    });
  };

  return [login, mutationResults];
};
