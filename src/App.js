import Header from "./Components/Header"
import Home from "./Components/Home"
import AllBlogs from "./Components/AllBlogs"

import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/allblogs' component={AllBlogs} />

          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
