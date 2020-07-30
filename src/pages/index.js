import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slideshow from '../components/slideshow'
// import Promos from '../components/Promos'
import Productos from '../components/Productos'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slideshow/>
    {/* <Promos/> */}
    <Productos/>
  </Layout>
)

export default IndexPage
