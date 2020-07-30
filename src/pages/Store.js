import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import Slideshow from '../components/slideshow'
import Productos from '../components/Productos'
import Layout from '../components/layout'
// import Promos from '../components/Promos'
import SEO from "../components/seo"


const Store = ()=> {

    return (
        <Layout>
        <SEO title="Store" />
        <Slideshow/>
        {/* <Promos/> */}
        <Productos/>
      </Layout>
        )
}

export default Store;