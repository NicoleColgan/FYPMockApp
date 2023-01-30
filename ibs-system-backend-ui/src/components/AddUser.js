import React, { useState } from 'react'
import UserService from '../services/UserService';
import { useNavigate } from "react-router-dom"

const AddUser = () => {
  //create a state
  //this is the deafult state, so whenever this object is initialised, it will be initialised to these values
  //for input values where we assign them to be values 
  /*
  can see the use of the curly braces which says that this is a react expression but the ones not in braces 
  e.g., name is jsut normal html!
  */
 //whenever the user puts a value in these boxes, state changes

 //this is like a map from one object to another 
 //in this operation, the user is the state and the setValue is the method to add a value to your state
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  });
  const navigate = useNavigate();
  
  //handle change event i.e. change the state, 
  //this means set the value of whatever input we are in
  //so say the input is 'first name', set this to whatever value they have entered in to that field, alongside the existing values
  //so dont overwrite tthe existing values (the meaning of '...user')
  //update this value
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user,[e.target.name]: value});
  }
  const reset = (e) => {
    e.preventDefault();
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      emailId: ""
    });
  }

  //saving employee to db
  const saveUser = (e) =>{
    //disable refreshing of the page because that might affect the saving and mess up the db
    e.preventDefault();
    //call the api
    //they can save whatever they have now which is the current state of the current object - it could be null which 
    //would result in the feault state, but we just want to save whatever state we have the object in rn
    //we will get a response from this post request, so we decide how to handle it
    //If theres an error, print it to console
    UserService.saveUser(user)
    .then((response) => {
      console.log(response)
      console.log(user)
      navigate("/userList");
    }).catch ((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <div className='flex max-w-2xl mx-auto shadow border-b'></div>
      <div className='px-8 py-8'></div>
      <div className='font-thin text-2xl tracking-wider'>
        <h1> Add new User</h1>
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
        onClick={saveUser}
        className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-700'>Save</button>
        <button 
        onClick={reset}
        className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-700'>Clear</button>
      </div>
      
    </div>
  );
};

export default AddUser