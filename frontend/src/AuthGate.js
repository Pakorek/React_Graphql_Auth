import React from "react";
import { useCookies } from "react-cookie";
import { useUserQuery } from "./network/userQuery";
import Private from "./pages/Private";
import AuthenticationForm from "./pages/AuthenticationForm";
import { useAuthToken } from "./config/auth";

export const AuthGate = () => {
  const [authToken] = useAuthToken();
  const userData = useUserQuery();
  const [cookies, setCookie, removeCookie] = useCookies(["USER"]);

  if (cookies && authToken) {
    // eslint-disable-next-line no-console
    console.log("cookie", cookies);
    return <Private user={cookies} />;
  }
  return <AuthenticationForm loading={userData.loading} />;
};
