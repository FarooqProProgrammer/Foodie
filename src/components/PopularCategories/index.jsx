import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";


const PopularCategories = ({title}) => {
    return (
        <Container className='py-5'>
            <h2 className='MerriweatherFont mb-4'>{title}</h2>

            <Row>
                {
                    [...Array(4)].map((item, index) => {
                        return (
                            <Col className='col-md-3'>
                                <Card className='shadow-none popularCategorieImage'>
                                    <Card.Img variant="top" className='rounded-circle' src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
                                    <Card.Body>
                                        <Card.Title className='text-center'>Spinach & Cheese </Card.Title>
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

export default PopularCategories
