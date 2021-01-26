import React, { useState } from "react"
import { Form, Col, Row, Container, Button } from "react-bootstrap"
import axios from "axios"

function BlogForm() {
  const [blogPost, setBlog] = useState({
    title: "",
    author: "",
    desc: "",
  })
  const handleChange = e => {
    console.log(e)
    setBlog({
      ...blogPost,
      [e.target.name]: e.target.value,
    })
  }
  const postBlog = async () => {
    try {
      const res = await axios.post(
        "https: //blog-tutorial-backend.herokuapp.com/create",
        blogPost
      )
      //After submitting form fields should be empty
      if (res.data) {
        setBlog({
          title: "",
          author: "",
          desc: "",
        })
        window.alert("Blog created")
        window.location.reload(false)
      }
    } catch (err) {}
  }
  const handleSubmit = e => {
    if (
      blogPost.title.trim() !== "" &&
      blogPost.author.trim() !== "" &&
      blogPost.desc.trim() !== ""
    ) {
      postBlog()
    } else {
      window.alert("Blog details are  empty")
    }
  }
  return (
    <div className='form-container'>
      <Form>
        <h4>Create a new blog</h4>
        <br />
        <Form.Group controlId='Title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder=''
            name='title'
            value={blogPost.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='Author Name'>
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            placeholder=''
            name='author'
            value={blogPost.author}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='Description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder=''
            name='desc'
            value={blogPost.desc}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='dark' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default BlogForm
