import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.scidev.net/sub-saharan-africa/wp-content/uploads/sites/5/2019/08/empowering_small_farmers-996x567.jpg "
        title="Welcome to Les Rams"
        text="reminders using your learning event scheduler."
        buttonText="Read more"
        url="./about"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
