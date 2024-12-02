import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './AppLayout/AppLayout'
import Jobs from './UI/Jobs/Jobs';
import Home from './UI/Home/Home';
import ActiveEmployers from './UI/ActiveEmployers/ActiveEmployers';
import EmployerLogin from './UI/EmployerLogin/EmployerLogin';
import JobseekerLogin from './UI/JobseekerLogin/JobseekerLogin';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/jobs",
          element: <Jobs />
        },
        {
          path: "/employers-list",
          element: <ActiveEmployers />
        },
        {
          path: "/employerlogin",
          element: <EmployerLogin />
        },
        {
          path: "/jobseekerlogin",
          element: <JobseekerLogin />
        },
      ]
    }
  ]);


  return <RouterProvider router={router} />
}

export default App
