import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Blogs from './Blogs';
import BlogForm from "./BlogForm";

function Home(){
    return (
        <div className="homescreen">
            <Container>
                <Row>
                    <Col xs={12} md={8}><Blogs/></Col>
                    <Col xs={12} md={4}>
                        <BlogForm/>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home;