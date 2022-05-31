import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState<User | null>();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (fetchedUser) => {
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        setUser(null);
      }
    })
  }, [auth]);

  return { user };
}

export default useUser;