import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "./Hero";
import MainContent from "./MainContent";
export default function LandingPage(props) {
  return (
    <>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}
