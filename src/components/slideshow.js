import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Slide from '../images/pastabanner.jpg'

export default function slideshow() {
    return (
        <Container className="mb-5">
            <img src={Slide} alt=""/>
        </Container>
    )
}
