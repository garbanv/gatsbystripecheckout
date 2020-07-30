import React, { useContext, useState, useEffect } from "react"
import { Container, Table,Row, Col,Alert } from "react-bootstrap"
import { CartContext } from "../components/CartContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY)

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const [total, setTotal] = useState("")

  const final = cart ? cart.filter(item => item.quantity > 0).map((item, index) => {
      const newfinal = {}
      newfinal.price = item.id
      newfinal.quantity = item.quantity
      return newfinal
    
    })   : null

  async function getCosts(arr) {
    const getTotal = await arr.reduce(function (total, price) {
      return (total += (price.unit_amount * price.quantity) / 100)
    }, 0)
    setTotal(getTotal.toFixed(2))
  }

  const handleClick = async event => {
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: final,
      mode: "payment",
      successUrl: "https://gatsbystripe.netlify.app/",
      cancelUrl: "https://gatsbystripe.netlify.app/",
    })
  }
  useEffect(() => {
  
    getCosts(cart)
  }, [cart])

  const removeFromCart = producto => {
    producto.quantity = producto.quantity - 1
    console.log(producto)
    setCart([...cart])
  }

  return (
    <Layout>
      <SEO title="Cart" />
      <Container>
        <h3 className="text-center font-weight-bold my-5">Cart</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Img</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {cart ? cart.map(producto => {
              return producto.quantity > 0 ? (
                <tr key={producto.id}>
            
                  <td>
                    <img src={producto.product.images[0]} />
                  </td>
                  <td>{producto.product.name}</td>
                  <td>
                    {producto.quantity}{" "}
                    <button
                      className="btn btn-dark"
                      onClick={() => removeFromCart(producto)}
                    >
                      -
                    </button>
                  </td>
                  <td>{(producto.unit_amount / 100).toFixed(2)}$</td>
                </tr>
              ) : (
                ""
              )
            }) : null}
          </tbody>
        </Table>


        <Row>
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}>
          <div className="mr-auto total">
        <Alert variant="dark">
        <h5 className="font-weight-bold">{`Total: ${total}`}</h5>
      </Alert>
      <button className="btn btn-dark" onClick={handleClick}>
          Pay Now! 
        </button>
        </div>
          </Col>

        </Row>


      </Container>
    </Layout>
  )
}

export default Cart
