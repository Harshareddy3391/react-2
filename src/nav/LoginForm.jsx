import React from 'react'
import { useRef} from 'react'

const LoginForm = () => {
  
  let checkref=useRef(null)
  let tchandle=(event)=>{
    if (event.target.checked == true){
      checkref.current.disabled=false
    }else{
      checkref.current.disabled=true
    }

    
  }
  return (
    <div>
      <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <input type="checkbox" ref={checkref} onClick={tchandle} />
        <button type='submit' disabled={true} ref={checkref}>Login</button>

    </form>
      
    </div>
  )
}

export default LoginForm
