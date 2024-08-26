import About from "./components/About/About";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </>
  );
}

export default App;
