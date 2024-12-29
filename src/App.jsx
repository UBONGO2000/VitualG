import Navbar from "./coponents/Navbar.jsx";
import HeroSection  from "./coponents/HeroSection.jsx";
import FeatureSection from "./coponents/FeatureSection.jsx";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";


function App() {

  return (
    <>
        <Navbar/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection/>
            <FeatureSection/>
            <Workflow />
            <Pricing />
            <Testimonials />
            <Footer />

        </div>

    </>
  )
}

export default App
