import React from 'react'
import { Link } from 'react-router-dom'
import { BasePath } from '../../constant'

export  function Button(props) {
    const{path,text}=props
  return (
    <Link to={`${BasePath+path}`} className=" flex  justify-center items-center capitalize text-[1.6rem] text-white px-[2rem] rounded-[.4rem] py-[1rem] h-[4rem] bg-[#65198f]">{text}</Link>
  )
}
