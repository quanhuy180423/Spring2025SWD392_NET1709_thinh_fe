import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'




function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={Router} />
    </>
  )
}

export default App
