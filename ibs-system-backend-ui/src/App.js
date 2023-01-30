import './App.css';
import Navbar from './components/Navbar'
import AddUser from './components/AddUser';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';
import React from "react";
import ReactDOM from 'react-dom/client';

//components (App) are used to render
//you can only return one parent so if you wrap them in empty tags, you can return more than 1
//The way routing works is that you show different components based on the different routes that you have defined
//i want to show the nav bar at all times so keep that outside the routes that were defining
//index is default page
//const root = ReactDOM.createRoot(document.getElementById('root'));
//everything added in here will be rendered in our application
const App = () => {

    return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<UserList />}></Route>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/userList" element={<UserList />}></Route>
        <Route path="/addUser" element={<AddUser />}></Route>
        <Route path="/editUser/:id" element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
    };
    export default App
  
  