import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import Logo from "../images/logo.png"
import { CartContext } from "./CartContext"

const Header = () => {
  const [cart, setCart] = useContext(CartContext)
  const [updatedCartQty, setUpdateCartQty] = useState()

  const cartQty = async arr => {
    const cartProductsQty = await arr.reduce(function (total, qty) {
      return (total += qty.quantity)
    }, 0)
    setUpdateCartQty(cartProductsQty)
  }

  useEffect(() => {
    cartQty(cart)
  }, [cart])

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <img src={Logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mt-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Cart" className="nav-link">
              Cart
            </Link>
          </Nav>
          <Nav className="ml-auto mt-4">
            <i className="fas fa-shopping-cart"></i>({updatedCartQty})
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
