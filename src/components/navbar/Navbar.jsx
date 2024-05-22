import React, {memo} from 'react'

const Child = ({title, count}) => {
  console.log("Child render");
  return (
    <div>
      <h2>Child {title} </h2>
      <button onClick={()=>count(5)}>Increment</button>
    </div>
  )
}
// cache

// memo - componentni render bo'lishini oldini oladi
export default memo(Child)