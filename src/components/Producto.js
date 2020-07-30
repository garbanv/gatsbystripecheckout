import React, { useState, useContext } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Button,
  Toast,
  render,
} from "react-bootstrap"
import { CartContext } from "./CartContext"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export default function Producto({ img, description, name, product, price }) {
  const [cart, setCart] = useContext(CartContext)
  const [show, setShow] = useState(false)

  toast.configure()

  const Notify = (name) => {
    toast.success(`${name} added`,{autoClose: 1500 });
  }

  const addToCart = () => {
    setShow(true)
    const isOnCart = cart
      .map(function (e) {
        return e.id
      })
      .indexOf(product.id)
    if (isOnCart != -1) {
      cart[isOnCart].quantity = cart[isOnCart].quantity + 1
      setCart([...cart])
    } else {
      product.quantity = 1
      setCart([...cart, product])
    }
  }
  return (
    <Col md={3}>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src={img} alt={name} />
          <Card.Body>
            <Card.Title>
              <h5 className="font-weight-bold  text-center">{name}</h5>
              <div className="text-center"></div>
            </Card.Title>
            <Card.Text className="text-center">{description}</Card.Text>

            <div className="text-center">
              <h6 className="text-center font-weight-bold ">{`${(
                price / 100
              ).toFixed(2)}€`}</h6>{" "}
              <br />
              <Button className="btn btn-dark shadow" onClick={() => { addToCart(); Notify(name);}}>
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
    </Col>
  )
}
