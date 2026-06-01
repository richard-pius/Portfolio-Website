import { BrowserRouter } from "react-router-dom";
import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas,
  DesktopOnlyGuard // 👈 Imported cleanly inline here
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* 🛡️ Intercepts mobile screen widths before rendering heavy graphics canvas objects */}
      <DesktopOnlyGuard /> 

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;