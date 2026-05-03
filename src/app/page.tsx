import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import TrustBlock from "./components/trust-block";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import HowWeWork from "./components/how-we-work";
import TransparencySection from "./components/transparency-section";
import DifferentialSection from "./components/differential-section";
import BudgetForm from "./components/budget-form";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <>
      <Navbar navLight={true} playBtn={false} bgLight={false} navCenter={false}/>
      
      <Hero />
      <TrustBlock />
      <AboutSection />
      <ServicesSection />
      <HowWeWork />
      <TransparencySection />
      <DifferentialSection />
      <BudgetForm />
      <ContactSection />
      
      <Footer />
    </>
  );
}
