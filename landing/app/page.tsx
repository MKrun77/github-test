import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Results from "@/components/Results";
import RoiCalculator from "@/components/RoiCalculator";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Channels />
        <Problems />
        <Features />
        <Results />
        <RoiCalculator />
        <Process />
        <Cases />
        <Pricing />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
