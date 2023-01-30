import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from '../services/UserService';

const UpdateUser = () => {

    //useParams can be used to get route parameters
    //we need to get the id that was passed
    const {id} = useParams();
    const navigate = useNavigate();
    //set initial state for employee (but we have the id, so pass it in)
    const [user, setUser] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: ""
      });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
      };
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await UserService.getUserById(user.id);
            setUser(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const updateUser = (e) => {
        e.preventDefault();
        console.log(user);
        UserService.updateUser(user, id).then((response) => {
            navigate("/userList");
      }).catch((error) => {
        console.log(error);
      });
  };

    
  return (
    <div>
      <div className='flex max-w-2xl mx-auto shadow border-b'></div>
      <div className='px-8 py-8'></div>
      <div className='font-thin text-2xl tracking-wider'>
        <h1> Update User</h1>
      </div>
      <div className='items-center justify-center h-14 w-full'>
        <label className='block text-gray-600 text-sm'>first name</label>
        <input 
        type='text' 
        name="firstName" 
        value={user.firstName}
        onChange={(e) => handleChange(e)}
        className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full py-10'>
        <label className='block text-gray-600 text-sm'>last name</label>
        <input type='text' name="lastName" 
        value={user.lastName}
        onChange={(e) => handleChange(e)}
        className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full py-10'>
        <label className='block text-gray-600 text-sm'>Email</label>
        <input type='email' name="emailId" 
        value={user.emailId}
        onChange={(e) => handleChange(e)}
        className='h-10 w-96 border mt-2 px-2 py-2'></input>
      </div>
      <div className='items-center justify-center h-14 w-full py-10 my-4 space-x-4 pt-4'>
        <button 
        onClick={updateUser}
        className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-700'>Update</button>
        <button 
        onClick={()=> navigate("/userList")}
        className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-700'>Cancel</button>
      </div>
      
    </div>
  )
}

export default UpdateUser