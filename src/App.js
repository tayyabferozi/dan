import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DomainLists from "./components/DomainLists";
import BuySellDomains from "./components/BuySellDomains";
import Investors from "./components/Investors";
import DomainSearch from "./components/DomainSearch";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DomainLists />
      <BuySellDomains />
      <Investors />
      <DomainSearch />
      <Footer />
    </>
  );
}

export default App;
