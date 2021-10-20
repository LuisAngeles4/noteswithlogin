import { auth, providers } from "../firebase";

export default {
  signIn: () =>
    auth
      .signInWithPopup(providers.google)
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      }),
  signOut: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
};
