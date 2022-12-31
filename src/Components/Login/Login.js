import React from 'react'
import { Outlet } from 'react-router-dom'
import { userContext } from '../../Context/UserContext'
import {Navigate} from 'react-router-dom';

const Login = () => {
  const {login} = React.useContext(userContext);
  if (login === true) return <Navigate to='/conta' />
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Login