import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { useContext } from "react";
import Product from "./pages/Product";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "./Store";
import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Ecommerce</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main className="mt-3">
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/cart" element={<CartPage/>}></Route>
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
