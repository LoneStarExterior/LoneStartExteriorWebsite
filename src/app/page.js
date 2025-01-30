import Image from "next/image";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import AttachedPromo from "./sections/AttachedPromo";
import FAQ from "./sections/FAQ";
import StatsSection from "./sections/StatsSection";
import ContactUs from "./sections/ContactUs";

export default function Home() {
  return (
    <>
    <Header />
    <AboutUs />
    <Services />
    <WhyChooseUs />
    <Testimonials />
    <AttachedPromo />
    <StatsSection />
    <FAQ />
    <ContactUs />
    </>
  );
}
