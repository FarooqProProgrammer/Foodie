import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./index.css"

const Hero = () => {
    return (
        <Container className='py-3'>
            <div className='heroSection'>
                <Row>
                    <Col md={6}>
                        <Image alt='' src='https://images.unsplash.com/photo-1685896211191-649aaefdf10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2UlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww' />
                    </Col>
                    <Col md={6} className=''>
                        <div className='heroContent px-sm-5'>
                            <h6 className=''>85%would make this again</h6>
                            <h2 className='MerriweatherFont display-4 text-center'>Mighty Super Cheesy Cake</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis inceptos fusce, a ullamcorper cubilia mollis vivamus auctor pellentesque consequat. Cras aptent nostra lacus fames pulvinar ac quis nunc vehicula elementum purus ultrices, convallis morbi class venenatis imperdiet odio tellus aliquam curae libero potenti. Diam sagittis cum nullam pharetra, montes ante.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default Hero
