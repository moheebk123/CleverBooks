import Features from "./sections/features/Features";
import Hero from "./sections/hero/Hero";
import Target from "./sections/target/Target";
import Footer from "./sections/footer/Footer";
import Cta from "./sections/cta/CTA";
import Reviews from "./sections/reviews/Reviews";
import Management from "./sections/management/Management";

const App = () => {
  return (
    <>
      <Hero />
      <Target />
      <Features />
      <Reviews />
      <Management />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
