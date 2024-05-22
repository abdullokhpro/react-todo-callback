import React, { useState, memo, useMemo, useCallback } from 'react'
import Child from '../navbar/Navbar'

let salaries = [150,600,492,86,848]

const Parent = () => {
  const [counter, setCounter] = useState(0)

  console.log("Parent rander");

  const totalSalary = (salaries)=>{
    return salaries.reduce((sum, item) => sum+item, 0)
  }

  // useMemo - functionni render bo'lishini oldini oladi
  let totalSalaryAmount = useMemo(()=>{
    return totalSalary(salaries)
  }, [])


  // useCallback - state funcsiyasini parentni o'zida render qilamiz
  let count = useCallback((n)=>{
    setCounter(p => p + n)
  }, [])

  return (
    <div>
      <h2>Parent {counter}</h2>
      <button onClick={()=> setCounter(p => p + 1)}>increment</button>
      <h3>{totalSalaryAmount}</h3>
      <hr />
      <Child title={"Lorem"} count={count}/>
        
    </div>
  )
}

export default memo(Parent)