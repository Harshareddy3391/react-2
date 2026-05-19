import React from 'react'
import { useState} from 'react'

const LoginForm = () => {
  let [tc, setTc] = useState(true)



  return (
    <div>
      <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <input type="checkbox" onClick={tchandle} />
        <button type='submit' disabled={tc}>Login</button>

    </form>
      
    </div>
  )
}

export default LoginForm
