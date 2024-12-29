import Navbar from "./coponents/Navbar.jsx";
import HeroSection  from "./coponents/HeroSection.jsx";
import FeatureSection from "./coponents/FeatureSection.jsx";
import Workflow from "./components/Workflow.jsx";
import Footer from "./components/Footer.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";


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
