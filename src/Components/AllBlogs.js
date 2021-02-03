import React from "react"
import Blogs from "./Blogs"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function AllBlogs() {
  return (
    <div>
      All Blogs
      <Blogs count={10000} />
    </div>
  )
}

export default AllBlogs
