import React, { useState, useEffect, createContext } from "react";

import auth from "./api";
import Login from "./screens/Login/Login";

const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("init");

  useEffect(() => {
    auth.onChange((user) => {
      setUser(user);
      setStatus("restored");
    });
  }, []);

  if (!user) return <Login signIn={auth.signIn} status={status} />;

  const state = { user };
  const actions = { signOut: auth.signOut, signIn: auth.signIn };

  return (
    <SessionContext.Provider value={{ state, actions }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider as Provider, SessionContext as default };
