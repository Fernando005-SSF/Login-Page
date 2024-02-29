import React, { useState } from 'react'
import './Login.css'

const Login = () => {

  const [action,setAction] = useState("Login")

  return (
    <div class="container">

      <div className="header">
        <h1>{action}</h1>
      </div>

      <div className="fields">
        {action==="Login"?<div></div>:<div className="text">
          <h3>Name</h3>
          <input type="text" />
        </div>
        }
        
        <div className="text">
          <h3>Email</h3>
          <input type="email" />
        </div>

        <div className="text">
          <h3>Password</h3>
          <input type="password" />
        </div>

      </div>

      <div className="buttons">

        <div> <button>sign up</button> </div>
        <div><button>Log in</button></div>

      </div>



    </div>
  )
}

export default Login
