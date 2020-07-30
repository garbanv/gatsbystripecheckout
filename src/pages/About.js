import React,{useContext} from 'react'
import {Container} from 'react-bootstrap'


import Slideshow from '../components/slideshow'

const About = ()=> {


    return(
        <Container>
        <h3 className="text-center font-weight-bold">About</h3>
        <Slideshow/>
        </Container>
    )
}

export default About;