import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState<User>();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (fetchedUser) => {
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    })
  }, [auth]);

  return { user };
}

export default useUser;