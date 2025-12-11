import { navItems } from '@/utils/constants/Constants'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='w-full py-8 px-[5vw] flex flex-row'>
      <div className="flex-1 flex items-center justify-start gap-[4vw]">
        {navItems?.slice(0,2).map((item,index)=>(
          <Link key={index} href={item?.to}>{item?.title}</Link>
        ))}
      </div>
      <div className="flex-[1.5] flex items-center justify-center">
        <h1 className='font-bold text-3xl'>Sparkz '25</h1>
      </div>
      <div className="flex-1 flex items-center justify-end gap-[4vw]">
        {navItems?.slice(0,2).map((item,index)=>(
          <Link key={index} href={item?.to}>{item?.title}</Link>
        ))}
        <button className="
  bg-[#D7FF00]
  text-black 
  font-semibold 
  px-8 py-3 
  inline-block
  skew-x-[-10deg]
">
  <span className="inline-block skew-x-[10deg]">
    CONTACT
  </span>
</button>


      </div>
    </div>
  )
}
