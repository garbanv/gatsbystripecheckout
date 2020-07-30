
import React from "react"
import PropTypes from "prop-types"
import {Container} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import {CartContext} from './CartContext'



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <CartContext.Consumer>
      {cart=> (
        <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
        <Container className="py-5 text-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.stripe.com">Stripe Chekout</a> by{' '}<a href="http://www.alexeigarban.com">Alexei Garban</a>
          </Container>
        </footer>
        </>
       )}
    </CartContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
