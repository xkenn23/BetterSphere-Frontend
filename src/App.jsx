import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PublicLayout from "./layouts/PublicLayout";
import { TechStack } from "./pages/TechStack";
import heroBackground from "./assets/hero-background.jpg";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tech" element={<TechStack />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
