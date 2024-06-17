import React, { useState } from 'react'



const button = ({children, click}) => {

const [start,setStart] = useState(0);
const btn = () => {setStart( start + 1)}


  return (
    <div>
        <button onClick={click}>{children}</button>
<button onClick={btn}>+</button>{start}
    </div>
  )
}

export default button