import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Select from './Comp/Select/Select';
import StudentLayout from './Layout/StudentLayout';
import SHome from './Student/SHome/SHome';
import THome from './Teacher/THome/THome';
import TeacherLayout from './Layout/TeacherLayout';
import ProtectedRout from './Comp/ProtectedRout/ProtectedRout';
import Login from './Comp/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Select></Select>
        }
      ]
    },
    {
      path:'/student',
      element:<StudentLayout></StudentLayout>,
      children:[
        {
          path:'/student',
          element:<SHome></SHome>
        }
      ]
    },
    {
      path:'/teacher',
      element:<ProtectedRout><TeacherLayout></TeacherLayout></ProtectedRout>,
      children:[
        {
          path:'/teacher',
          element:<THome></THome>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ])
  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
