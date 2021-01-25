import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Blogs';

function Home(){
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={8}><Blogs/></Col>
                    <Col xs={6} md={4}>
                        <Row>
                            <Col lg="12">Hello</Col>
                            <Col>Hi</Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home;