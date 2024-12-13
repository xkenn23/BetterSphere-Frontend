import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
