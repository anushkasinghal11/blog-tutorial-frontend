import React from 'react'
import {Form,Col,Row,Container,Button} from "react-bootstrap";

function BlogForm() {
    return (
      
       
                <div className="form-container" >
            <Form>
              <h4>Create a new blog</h4><br/>
                <Form.Group  controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="" />
                </Form.Group>
            

                <Form.Group  controlId="Author Name">
                <Form.Label>Author Name</Form.Label>
                <Form.Control placeholder="" />
                </Form.Group>

                <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="" />
                </Form.Group>

        <Button variant="dark" type="submit">
            Submit
        </Button>
       
        </Form>
    </div>
 
        
    )
}

export default BlogForm
