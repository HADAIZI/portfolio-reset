import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import ParallaxSection from "./components/ParallaxSection"; // Import the ParallaxSection

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MainPage />
        <ParallaxSection backgroundImage="/images/p1.jpg" textContent="About Me" /> {/* First ParallaxSection */}
        <AboutSection />
        <ParallaxSection backgroundImage="/images/p2.jpg" textContent="My Projects" /> {/* Second ParallaxSection */}
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
