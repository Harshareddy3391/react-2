import React from 'react'
import {useState} from 'react'

function Contact() {
  let [number, setnumber] = useState(0)
  let [fact, setfact] = useState(4)

  //let res =factloop(fact)
  let res=useMemo(() => factloop(fact), [fact])
  function factloop(n) {
    let f = 1
    for (let i = 1; i <= n; i++) {
      f *= i
    }
    return f
  }
  return (
    <div className="container mt-5">
      <h1>Contact</h1>
      <p>Reach out by email or phone for more information.</p>
      <button onClick={() => setnumber(number + 1)}>Phone: {number}</button>
      <button onClick={() => setfact(res)}>Fact: {fact}</button>
    </div>
  )
}

export default Contact
