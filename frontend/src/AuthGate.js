import React from "react";
import { useUserQuery } from "./network/userQuery";
import Private from "./pages/Private";
import AuthenticationForm from "./pages/AuthenticationForm";
import { useAuthToken } from "./config/auth";

export const AuthGate = () => {
  const [authToken] = useAuthToken();
  const userData = useUserQuery();

  if (userData.data && authToken) {
    // eslint-disable-next-line no-console
    console.log(userData.data);
    // return <Private user={userData.data.me} />;
  }
  return <AuthenticationForm loading={userData.loading} />;
};
