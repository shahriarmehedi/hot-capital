import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Invest from "../components/Invest";
import Market from "../components/Market";
import Questions from "../components/Questions";
import Call from "../components/Call";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Invest />
      <Market />
      <Questions />
      <Call />
      <Footer />
    </main>
  );
}
