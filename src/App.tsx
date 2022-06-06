import { Home, SelfReflection } from "./pages";
import { Navbar } from "./components/UI";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { reflectionActions } from "./store/reflection-slice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reflectionActions.initializeReflectionState());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activity" element={<Navigate to="/activity/self-reflection" replace />} />
        <Route path="/activity/self-reflection" element={<SelfReflection />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
