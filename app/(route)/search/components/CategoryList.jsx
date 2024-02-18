"use client"
import React, { useLayoutEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import GlobalApi from '@/app/component/GlobalApi'
import Image from 'next/image'
function CategoryList() {
    const [cimg, setcimg] = useState([])
    const myFun = async () => {
      const mydata = await GlobalApi()
  
      setcimg(mydata.data)
      console.log(mydata.data)
    }
    useLayoutEffect(()=>{
      myFun();
    },[])
  return (
    <div>
    <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Category">
    
        {
            cimg?.map((item, index) => {
                return (
                  index <= 5 && (
                    <CommandItem className="">
                      <Image
                      alt='image'
                        src={item.attributes.icon.data.attributes.url}
                        height={100}
                        width={100}
                      ></Image>
                      <h2>{item.attributes.name}</h2>
                      </CommandItem>
                  )
                )
              })  
        }
      </CommandGroup>
      
     
    </CommandList>
  </Command>
  
    </div>
  )
}

export default CategoryList