import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";



const FoodMenu = ({ title }) => {
    return (
        <Container className='py-5'>
            <h2 className='MerriweatherFont mb-4'>{title}</h2>

            <Row>
                {
                    [...Array(4)].map((item, index) => {
                        return (
                            <Col className='col-md-3'>
                                <Card>
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
                                    <Card.Body>
                                        <Card.Text>
                                            <div className='d-flex justify-content-start align-items-center gap-1'>
                                                <FaStar size={16}  color='orange' /> <FaStar size={16}  color='orange' /> <FaStar  size={16}  color='orange'/> <FaStar size={16}  color='orange' /> <FaStar size={16}  color='orange' />
                                            </div>
                                        </Card.Text>
                                        <Card.Title>Spinach & Cheese </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default FoodMenu
