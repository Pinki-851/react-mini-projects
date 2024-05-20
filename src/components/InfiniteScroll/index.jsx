import React, { useEffect, useState } from 'react'

export function InfiniteScroll() {
  const[count,setCount]=useState(10)
  let element=[]

  for(let i=0;i<count;i++){
    element.push(<div>{i+1}</div>)
  }

  const handleScroll=()=>{
 if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1) {  console.log('inside');
  setCount((prev)=>prev+10)
}
  }
useEffect(()=>{
  window.addEventListener("scroll",handleScroll);
  return ()=>{
      window.removeEventListener("scroll",handleScroll);

  }
},[])

  return (
    <div className='flex flex-col justify-center items-center gap-2 p-[4rem]'>{element?.map((val,index)=>{
      return <div key={index} className='bg-purple-700 h-[20rem] w-[80rem] rounded-[.8rem] flex justify-center text-white items-center text-[1.6rem]'>{val}</div>
    })}</div>
  )
}
