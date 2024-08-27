import About from "./components/About/About";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Stories from "./components/Stories/Stories";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
      </main>
    </>
  );
}

export default App;
