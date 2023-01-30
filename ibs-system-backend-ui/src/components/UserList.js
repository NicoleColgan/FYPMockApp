import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import UserService from '../services/UserService';
import User from './User';

const UserList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async() =>{
      setLoading(true);
      try{
        //it might take a while to get all the data so we have to 'await' till we get it all 
        //that means the method has to be set as an async method
        const response = await UserService.getUsers();
        //got the response - set the response to the state
        setUsers(response.data);
      } catch(error){
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteUser = (event, id) => {
    event.preventDefault();
    //delete data from database then when you get the response, check if the user is still on screen (the ui user)
    //set users array (ui users are not neccesarily the same as users in the db) to be the previous list and take out 
    //the current user were on 
    UserService.deleteUser(id).then((res) => {
      if(users){
        setUsers((prevElement) => {
          return prevElement.filter((user)=> user.id!==id);
        })
      }
    })
  }

  //loading should be complete before you display table
  return (
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button 
        onClick={() => navigate("/addUser")}
        className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add User</button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 tracking-wider py-3 px-6'>First Name</th>
              <th className='text-left font-medium text-gray-500 tracking-wider py-3 px-6'>Last Name</th>
              <th className='text-left font-medium text-gray-500 tracking-wider py-3 px-6'>Email ID</th>
              <th className='text-right font-medium text-gray-500 tracking-wider py-3 px-6'>Actions</th>
            </tr>
          </thead>
          {!loading && (
          <tbody className='bg-white'>
            {users.map((user) => (
              <User user={user} deleteUser={deleteUser} key ={user.id}></User>
            ))}
          </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default UserList