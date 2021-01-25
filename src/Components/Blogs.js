import React, {useEffect, useState} from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
function Blogs(){

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const dataFetch = async() => {
            try{
                const headers = {
                    "Access-Control-Allow-Origin": "*"
                }
                const res = await axios.get("https://blog-tutorial-backend.herokuapp.com/api/blogs", headers);
                console.log(res.data);
                if(res.data){
                    setBlogs(res.data);
                }
            }
            catch(error){
                console.log(error);
            }
            
        }
        dataFetch();


    }, [])

    return (
        < div className="blog"> 
            {blogs ? (
                <Row className="blogs">
                    {blogs.map((blog) => (
                        <Col sm={12} md={6} lg={8} xl={6}>
                        <Card style={{ width:'18 rem' }} className="blog-card">
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">By {blog.author}</Card.Subtitle>
                                <Card.Text>
                                    {blog.desc}
                                    
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        </Col>
                    ))

                    }
                </Row>
            ) : (
                <></>
            )
            }
        </div>
    )
}
export default Blogs;