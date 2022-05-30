import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUser } from "../../../hooks";
import Button from "../Button";
import Dropdown from "../Dropdown";

const Navbar: React.FC = () => {
  const { user } = useUser();
  const signupHandler = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
    })
  }
  const profileSettingsList = [
    {
      label: "Logout",
      onClick: () => {
        const auth = getAuth();
        auth.signOut();
      }
    }
  ]
  
  return (
    <nav className="relative text-sky-800 bg-sky-50 py-5 flex flex-col sm:items-center sm:flex-row justify-between md:px-40 px-10">
      <div className="text-2xl font-bold">Find Your Passion</div>
      <ul id="nav" className="hidden flex-col pt-4 sm:flex sm:flex-row sm:list-none sm:pt-0 sm:items-center gap-2 sm:gap-0">
        <li>
          <a href="/about" className="mx-3">
            About
          </a>
        </li>
        <li>
          <a href="/activity" className="mx-3">
            Activity
          </a>
        </li>
        <li>
          {
            user ? (
              <Dropdown 
                label={
                  <div className="flex gap-1">
                    <span>{user.displayName?.split(" ")[0]}</span>
                    <img className="rounded-full ml-1 w-[24px] h-auto" src={user.photoURL || "/images/background.jpg"} alt={user.displayName || "User profile"} />
                  </div>
                } 
                list={profileSettingsList}
              />
            ) : (
              <Button size="sm" onClick={signupHandler} additionalClasses="ml-4">Login</Button>
            )
          }
        </li>
      </ul>
      <div 
        className="font-bold text-sky-800 cursor-pointer sm:hidden absolute top-6 right-6"
        onClick={() => {
          const nav = document.getElementById("nav");
          nav?.classList.toggle("flex");
          nav?.classList.toggle("hidden");
        }}
      >
        <i className="bi bi-list"></i>
      </div>
    </nav>
  );
};

export default Navbar;
