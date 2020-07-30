import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Banner1 from '../images/banner1.jpg'

export default function Promos() {
    return (
        <Container>
            <Row>
                <Col md={6}><img src={Banner1} alt="image" className="mb-2"/></Col>
                <Col md={6}><img src={Banner1} alt="image" className="mb-2"/></Col>
            </Row>
        </Container>
    )
}
