import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import LearnMore from "./components/LearnMore/LearnMore";
import Row from "./components/Row/Row";

function App() {
  return (
    <>
      <Hero />
      <Banner />
      <div className="main-container">
        <Infrastructure />
        <Row />
        <LearnMore />
      </div>
    </>
  );
}

export default App;
