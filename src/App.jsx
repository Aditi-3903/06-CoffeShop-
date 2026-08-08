import Navbar from "./Components/Header/Navbar";
import HeroSection from "./Components/Herosection/HeroSection";
import MiddleSection from "./Components/Mid-section/MiddleSection";
import Endsection from "./Components/Endsection/Endsection";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-poppins">
      <Navbar />

      <main>
        <HeroSection />
        <MiddleSection />
        <Endsection />
      </main>

      <Footer />
    </div>
  );
};

export default App;