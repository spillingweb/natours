import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import Stories from "./components/Stories/Stories";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Modal />
    </>
  );
}

export default App;
