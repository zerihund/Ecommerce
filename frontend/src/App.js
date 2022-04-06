import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Product from "./pages/Product";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Ecommerce</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">@zed</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
