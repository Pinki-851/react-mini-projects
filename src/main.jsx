import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '../src/styles/index.css'
import { Home } from './components/Home'
import { NavigateContainer } from './components/Home/NavigateContainer'
import { InfiniteScroll } from './components/InfiniteScroll'
import Dashboard from './components/dashboard'
import { JiraBoard } from './components/jira-board'
import { BasePath } from './constant'
// import App from './App'

const router=createBrowserRouter([
  {
    path:BasePath+"/dash",
    element:<Dashboard/>,
  },
  {
    path:BasePath+"/",
    element:<Home/>,
    children:[{path:BasePath+"/infinite-scroll",
    element:<InfiniteScroll/>
  },{
      path:BasePath+"/jira-board",
      element:<JiraBoard/>
    },{
      path:"",
      element:<NavigateContainer/>
    }
  ]

  },{
    path:"*",
    element:<>Not found</>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
