import React, { useState } from 'react'
import  { useContext } from 'react'
import { glabaldata } from './Context'
import "./Contect.css"
const Contect = () => {
    
    const { name,setName,number,setNumber,seteditBtn, editBtn,seteditinputData,editinputData } = useContext(glabaldata)
    const [data,setData]=useState([]);
    const [search,setSearch]=useState();

   const handlesubmit=()=>{
    if (name==="" || name.length<3 ||name.length>40 ){
        alert("Enter your Full Name must have space between FirstName and LastName")
      }    else if (number==="" || /^(0|[+91]{3})?[6-9][0-9]{9}$/.test(number)===false) {
        alert("plase enter your 10 digit mobile number ")
      }
      else if(name && number && !editBtn){
        setData(data.map((ele)=>{
                if(ele.id === editinputData){
                   return {...ele,name:name,number:number}
                }
                return ele;
        }))

        setName("")
        setNumber("")
        seteditBtn(true)
        seteditinputData(null)
    }
      else{
        setData([
            ...data,{
            name: name,
            number: number,
            id: Date.now()}
          ])
          setName(" ")
           setNumber(" ")
          
     
      }
      
    
      
   }
   const  deletehandle=(id)=>{
   
    const newlist = data.filter((ele) => {
        return ele.id !== id
    })
    setData(newlist)
   
   }

   const edithandle=(id)=>{
    const newEditdata = data.find((ele) => {
        return ele.id === id
    })
    console.log(newEditdata)
    seteditBtn(false)
    setName(newEditdata.name)
    setNumber(newEditdata.number)
    seteditinputData(id)
   }

   const searchhanlde=()=>{
     const newsearch=data.filter((e)=>{
      return e.name.toLowerCase().includes(search.toLowerCase());
     })
     setData(newsearch);
     setSearch("");
   }

    const savehandle=()=>{

 }
    return (
        <div>
    <div>
      <input type="text" placeholder="Enter Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number"  placeholder=" Enter Number"  value={number} onChange={(e)=>setNumber(e.target.value)}/>
       
{ 
        editBtn ? <button onClick={handlesubmit}>Add</button>: <button onClick={handlesubmit}>Edit</button>
       }
       <input type="text"  placeholder=" Search by using name"  value={search} onChange={(e)=>setSearch(e.target.value)} /> 
       <button onClick={searchhanlde}>Search</button>
    </div>
      <div className='main'>
    {
        data && data.map((ele,id)=>{
            return (
                <div key={id} className='main2'>
                 <div className='img'> <img src='https://png.pngtree.com/png-vector/20210330/ourmid/pngtree-contacts-png-image_3165979.jpg' width={"70"} /></div> 
               <div className='content'>  <h5>{ele.name}</h5>
                    <h6><img src='https://cdn4.vectorstock.com/i/1000x1000/19/78/silhouette-phone-calling-sign-telephone-icon-vector-19301978.jpg' width={"20"}/>+91{ele.number}</h6>
                    <button className='btn2' onClick={ () =>deletehandle(ele.id) }> Delete </button>
                    <button className='btn3' onClick={ () =>edithandle(ele.id) }> Edit </button>
                     <button className='btn4'  onClick={ () =>savehandle(ele.id) }> Save </button>
                     </div> 

                </div>
            )
        })
    }
    </div>
    
    </div> 
    
  )
  


  
  
}

export default Contect
