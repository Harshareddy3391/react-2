import React from 'react'
import { useRef} from 'react'

const LoginForm = () => {
  
  let checkref=useRef(null)
 
  return (
    <div>
      <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <input type="checkbox" ref={checkref} onClick={tchandle} />
        <button type='submit' disabled={tc}>Login</button>

    </form>
      
    </div>
  )
}

export default LoginForm
