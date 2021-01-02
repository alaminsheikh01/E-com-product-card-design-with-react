import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreens from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <HomeScreens />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
