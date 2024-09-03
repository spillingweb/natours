import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
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
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
