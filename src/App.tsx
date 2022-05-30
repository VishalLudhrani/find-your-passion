import Home from "./components/Home";
import { Navbar } from "./components/UI";
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
