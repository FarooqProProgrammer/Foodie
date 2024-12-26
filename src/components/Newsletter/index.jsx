import React from 'react'
import "./index.css"
import { Form, InputGroup } from 'react-bootstrap'


const NewsLetter = () => {
    return (
        <div className='newsletter py-5'>
            <div className="container">
                <div className="py-5 gap-3 d-flex flex-column justify-content-center align-items-center">
                    <h3 className='MerriweatherFont display-3 mb-0'>Delciousnous to your inbox</h3>
                    <p className='fs-5'>Enjoy Weekly hand picked receipies and recommendation</p>
                    <div className="row justify-content-center  w-100">
                        <div className="col-md-4">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2" className='btn btn-danger'>
                                    JOIN
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
