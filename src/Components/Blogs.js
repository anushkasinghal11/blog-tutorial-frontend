import React, { useEffect, useState } from "react"
import axios from "axios"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
function Blogs(props) {
  console.log(props)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const headers = {
          "Access-Control-Allow-Origin": "*",
        }
        const res = await axios.get(
          "https://blog-tutorial-backend.herokuapp.com/api/blogs",
          headers
        )
        console.log(res.data)
        if (res.data) {
          //To limit the number of blogs on home page
          setBlogs(res.data.slice(0, 6))
        }
      } catch (error) {
        console.log(error)
      }
    }
    dataFetch()
  }, [])

  return (
    <div className='blog'>
      {blogs ? (
        <Row className='blogs'>
          {blogs.map((blog, id) => (
            <Col key={id} sm={12} md={6} lg={8} xl={6}>
              <Card style={{ width: "18 rem" }} className='blog-card'>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    By {blog.author}
                  </Card.Subtitle>
                  <Card.Text>{blog.desc.substring(0, 100) + "...."}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Blogs
