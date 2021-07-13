import { Container, Row } from "react-bootstrap";
import About from "./components/about/about";
import Demos from "./components/demo/demos";
import Footer from "./components/footer/footer";
import Form from "./components/contact/contact";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Navs from "./components/navBar/navBar";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <Navs />
      <section id="home">
        <Home />
      </section>
      <section className="about-demos">
        <Container>
          <Row xs={1} lg={2} md={2}>
            <Demos />
            <About />
          </Row>
        </Container>
      </section>
      <section id="contact-us">
        <Form />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
