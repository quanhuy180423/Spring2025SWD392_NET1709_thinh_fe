import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import { useEffect } from 'react';
import { userService } from './services/userService.js';



function App() {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userService.getUser();
        console.log(data.role)

      } catch (err) {
        console.error(err)
      }
    };

    fetchUserData();
  }, [])
  return (
    <>
      <ToastContainer />
      <RouterProvider router={Router} />
    </>
  )
}

export default App
