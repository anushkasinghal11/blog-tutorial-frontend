import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "react-bootstrap/Card"

//import "./Blogs.css"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link, Redirect } from "react-router-dom"
//import config from "../config.json"

import Blogs from "./Blogs"
function SingleBlog(props) {
  const [blog, setBlog] = useState([])
  let id = props.match.params.id

  const [deleteB, setDelete] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://blog-tutorial-backend.herokuapp.com/api/blog/${id}`
        )
        console.log(res.data)
        if (res.data) {
          setBlog(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
  }, [])

  const deleteBlog = async () => {
    try {
      const res = await axios.delete(
        `https://blog-tutorial-backend.herokuapp.com/api/delete/${id}`
      )
      console.log(res.data)
      if (res.data) {
        setDelete(true)
        window.alert("blog deleted")
        // return <Redirect to="/allblogs" />;
      }
    } catch (error) {
      console.log(error)
      window.alert("Something wrong, please try again")
    }
  }

  const updateBlog = () => {}

  if (deleteB) {
    return <Redirect to='/allblogs' />
  }
  return (
    <>
      <Card style={{ width: "18 rem" }} className='blog-card'>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            By {blog.author}
          </Card.Subtitle>
          <Card.Text>{blog.desc}</Card.Text>
          <Link to={{ pathname: "/fullblog" + blog._id }}>
            <Button variant='primary'>Explore More</Button>
          </Link>
        </Card.Body>
        <Card.Footer className='text-muted'></Card.Footer>
      </Card>

      <Button variant='primary' onClick={deleteBlog}>
        Delete
      </Button>
      <Link to={{ pathname: "/updateblog/" + blog._id }}>
        <Button variant='primary'>Update</Button>
      </Link>
    </>
  )
}
export default SingleBlog
