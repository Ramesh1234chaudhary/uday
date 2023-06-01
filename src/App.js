import React, { useState } from 'react'

const App = () => {
  const option=["cricket","footbal","hockey"]
  const days=["weekday","weekend"]
  const[choose,setChoose]=useState()
  const[day,setDays]=useState()
  return (
    <div>
      <h1>which game</h1>
      {
        option.map((val)=>{
          return <div><input type="radio" name="options"  value={val} onChange={(e)=>setChoose(e.target.value)}/>
          <label for="val">{val}</label></div>
        })
      }
      
      <h1>which day</h1>
      {
        days.map((val)=>{
          return <div><input type="radio"  name="options"  value={val} onChange={(e)=>setDays(e.target.value)}/>
          <label for="val">{val}</label></div>
        })
      }
      

      
      <h1>you will play</h1>
      <p>{choose} on {day}</p>  
        
    </div>
  )
}   

export default App
