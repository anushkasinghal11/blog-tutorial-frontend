import Header from "./Components/Header"
import Home from "./Components/Home"
import AllBlogs from "./Components/AllBlogs"
import SingleBlog from "./Components/SingleBlog"
import UpdateBlog from "./Components/UpdateBlog"

//import CreateBlog from "./Components/CreateBlog"

import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BlogForm from "./Components/BlogForm"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/allblogs' component={AllBlogs} />
          <Route path='/fullblog/:id' component={SingleBlog} />
          <Route path='/createblog' component={BlogForm} />
          <Route path='/updateblog/:id' component={UpdateBlog} />
          <Route path='/fullblog/:id' component={SingleBlog} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
