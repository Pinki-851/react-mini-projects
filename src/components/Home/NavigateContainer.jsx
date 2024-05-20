import React from 'react'
import { NavigationList } from '../../constant/NavigationList'
import { Button } from '../Button'

export function NavigateContainer() {
  return (
    <div className='p-[1rem] flex gap-5' >

        {NavigationList.map((value,)=>{
            return         <Button key={value.text} path={value.path}text={value.text}/>

        })}
</div>
  )
}
