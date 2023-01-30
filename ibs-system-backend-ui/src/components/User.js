import React from 'react'
import {useNavigate} from 'react-router-dom'
//this is the class that will be displayed on the UI
const User = ({user, deleteUser}) => {

    const navigate = useNavigate();
    const editUser = (event, id) => {
        event.preventDefault();
        //navigate to the new page
        //remember you have to do back tics if yo want to use JSX or put a param in
        navigate(`/editUser/${id}`);
    };

  return (
    <tr key ={user.id}>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className='text-sm text-gray-500'>
                  {user.firstName}
                </div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className='text-sm text-gray-500'>
                {user.lastName}
                </div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className='text-sm text-gray-500'>
                {user.emailId}
                </div>
              </td>
              <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a href="#" 
                onClick={(event, id) => editUser(event, user.id)}
                className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>
                <a 
                onClick={(event,id) => deleteUser(event, user.id)}
                className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Delete</a>
              </td>
            </tr>
  )
}

export default User