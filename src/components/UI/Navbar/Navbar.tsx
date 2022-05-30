const Navbar: React.FC = () => {
  
  return (
    <nav className="relative text-sky-800 bg-sky-50 py-5 flex flex-col sm:items-center sm:flex-row justify-between md:px-40 px-10">
      <div className="text-2xl font-bold">Find Your Passion</div>
      <ul id="nav" className="hidden flex-col pt-4 sm:flex sm:flex-row sm:list-none sm:pt-0">
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
          <a href="/profile" className="mx-3">
            Profile
          </a>
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
