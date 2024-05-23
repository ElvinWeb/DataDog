import Banner from "./components/Banner/Banner";
import Carrer from "./components/Carrer/Carrer";
import Hero from "./components/Hero/Hero";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Blog from "./components/Blog/Blog";
import LearnMore from "./components/LearnMore/LearnMore";

function App() {
  return (
    <>
      <Hero />
      <Banner />
      <div className="main-container">
        <Infrastructure />
        <Blog />
        <Carrer />
        <LearnMore />
      </div>
    </>
  );
}

export default App;
