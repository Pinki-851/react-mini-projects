import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BasePath } from '../../constant'

export function Home() {
  return (
    <div className='min-h-[100vh] h-full gradient-background'>
        <header className='p-[1rem] h-[4rem] header'><Link to={`${BasePath}/`} className='text-white tex-[1.6rem]'>Home</Link></header>
        <Outlet/>
    </div>
  )
}

