import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu=[
        {id:1,name:"Home",path:"/"},
        {id:1,name:"Explore",path:"explor"},
        {id:1,name:"Contact Us",path:"/"}
    ]
  return (
    <div className='flex gap-10  justify-between items-center m-1 shadow-md p-4'>
    <Image src={"/vercel.svg"} height={80} width={80}></Image>
     <ul className=' flex gap-10'>
     {Menu.map((item,index)=>{
        return(
             <Link href={item.path}>
             <li className=" md:flex hidden hover:text-blue-700 scale-100 transition-all  ease-in-out cursor-pointer" key={index}>
             {item.name}
            </li>
             </Link>
        )
    })}
    <Button className=" h-[40px] w-[80px]">LogIn</Button>

     </ul>
    </div>
  )
}

export default Header