import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap"
import Producto from "./Producto"

const Productos = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allStripePrice(filter: { active: { eq: true } }) {
            edges {
              node {
                id
                product {
                  images
                  name
                  description
                }
                unit_amount
                unit_amount_decimal
              }
            }
          }
        }
      `}
      render={data => (
        <Container>
          <h3 className="text-center font-weight-bold my-5">Our Menu</h3>

          <Row>
            {data.allStripePrice.edges.map(({ node }) => (
              <Producto
                img={node.product.images}
                name={node.product.name}
                description={node.product.description}
                product={node}
                price={node.unit_amount_decimal}
                key={node.id}
              />
            ))}
          </Row>
        </Container>
      )}
    />
  )
} // aqui termina el ()

export default Productos
