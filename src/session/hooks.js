import React, { useContext } from "react";

import SessionContext from "./context";

export function useUser() {
  const {
    state: { user },
  } = useContext(SessionContext);
  return user;
}

export function useSignOut() {
  const {
    actions: { signOut },
  } = useContext(SessionContext);
  return signOut;
}
