import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PeopleList from './features/people/People';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Signup from './features/auth/Components/Signup';
import FindJobPage from './pages/FindJobPage';

import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
}from "react-router-dom"
import SignupPage from './pages/SignupPage';
import ApplicationPage from './pages/ApplicationPage';
import AddJobPage from './pages/AddJobPage';
import ProfilePage from './pages/ProfilePage';
import NotificationPage from './pages/NotificationPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:(<Home></Home>),
  },
  {
    path:"/login",
    element:(<LoginPage></LoginPage>)
  },
  {
    path:"/signup",
    element:(<SignupPage></SignupPage>)
  },
  {
    path:"/applicationHistory",
    element:(<ApplicationPage></ApplicationPage>)
  },
  {
    path:"/findJob",
    element:(<FindJobPage></FindJobPage>)
  },
  {
    path:"/addJob",
    element:(<AddJobPage></AddJobPage>)
  },
  {
    path:"/profile",
    element:(<ProfilePage></ProfilePage>)
  },
  {
    path:"/notifications",
    element:(<NotificationPage></NotificationPage>)
  }
]);
    
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
