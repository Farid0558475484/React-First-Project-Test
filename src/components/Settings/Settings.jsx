import React from 'react'
import { Navigate } from 'react-router-dom'

function Settings(props) {
  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div>Settings</div>
  )
}

export default Settings