import { useContext } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { DarkContext } from "./DarkContext";

const App = () => {
  const { dark } = useContext(DarkContext);
  return (
    <div className={`min-h-screen ${dark ? "Dark-mode" : "Light-mode"}`}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
