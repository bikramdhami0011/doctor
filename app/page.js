'use client'
import React, {  useLayoutEffect, useState } from 'react'
import Hero from './component/Hero'
import GlobalApi from './component/GlobalApi'
import Image from 'next/image'
import DoctorApi from "./component/DoctorApi"
import Link from 'next/link'
function Home() {
  const [cimg, setcimg] = useState([])
  const myFun = async () => {
    const mydata = await GlobalApi()

    setcimg(mydata.data)
  }
  const [dimg, setdimg] = useState([])
  const myFun2 = async () => {
    const mydata = await DoctorApi()

    setdimg(mydata.data)
    console.log("this is doctors",dimg)
  }
  useLayoutEffect(() => {
    myFun();
    myFun2();

  }, [])

  console.log('this is data ', cimg.data)

  return (
    <div>
      <Hero></Hero>
      <div className="flex  flex-col  justify-center items-center ">
        <h1 className=" font-extrabold text-xl ">
          Search <span className=" text-blue-600 font-medium ">Doctor</span>
        </h1>
        <p>Search a doctor and appoint in one click</p>
        <div>
          <input className=" border-blue-600  outline outline-blue-700 outline-1 m-2 p-2"></input>
          <button className="border-blue-600 outline-1 outline-blue-600">
            Search
          </button>
        </div>
      </div>
     
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6">
        {cimg.length>0?cimg?.map((item, index) => {
          return (
            index <= 5 && (
              <Link href={`/search/${item.attributes.name}`}
                key={index}
                className=" bg-blue-100 flex flex-col text-center gap-2 justify-center items-center m-2 p-2 shadow-md hover:shadow-lg transition-all ease-in-out scale-100 duration-500"
              >
                <Image
                alt='image'
                  src={item.attributes.icon.data.attributes.url}
                  height={100}
                  width={100}
                ></Image>
                <h2>{item.attributes.name}</h2>
              </Link>
            )
          )
        }):
        <div className=' animate-pulse h-[400px] w-[100vw] gap-2 grid grid-cols-2 m-4 md:grid-cols-4 lg:grid-cols-6 '>
        {
          [1,2,3,4,5,6].map((item,index)=>{
            return( 
              <div key={index} className=' bg-blue-100 flex flex-col text-center gap-2 justify-center items-center m-2 p-2 shadow-md hover:shadow-lg transition-all ease-in-out scale-100 duration-500 w-full '>
                
              </div>
            )
          })
        }
        </div>}
      </div>
       <h1>Search Doctors</h1>
       <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
       {dimg.length>0?dimg?.map((item, index) => {
         return (
           index <= 5 && (
             <div
               key={index}
               className=" bg-blue-100 flex flex-col gap-2  m-2 p-2 shadow-md hover:shadow-xl transition-all ease-in-out scale-100 duration-500"
             >
               <Image
                 src={item.attributes.photo.data.attributes.url}
                 height={200}
                 width={220}
                 alt='image'
                 className=' h-[250px] w-[250px]'
               ></Image>
              
            <div className=' flex flex-col justify-start items-start'>
            <p className=' font-thin text-sm bg-blue-200 p-2 rounded-full '>{item.attributes.categories?.data[0].attributes.name}</p>
            <h2 className=" font-extrabold " >{item.attributes.name}</h2>
            <p className=' text-[12px]'>{item.attributes.experience}</p>
            <p className=' h-[50px] overflow-clip '>{item.attributes.About}</p>
            <h1 className=' cursor-pointer mt-2 bg-slate-50 p-2 rounded-full border-blue-500 border-[2px]  hover:bg-blue-400'>Book Now</h1>
            </div>
             </div>
           )
         )
       }):<div className=' animate-pulse h-[700px] w-[100vw] gap-2 grid grid-cols-2 m-4 md:grid-cols-4 lg:grid-cols-6 '>
       {
         [1,2,3,4,5,6].map((item,index)=>{
           return( 
             <div key={index} className=' bg-blue-100 flex flex-col text-center gap-2 justify-center items-center m-2 p-2 shadow-md hover:shadow-lg transition-all ease-in-out scale-100 duration-500 w-full '>
               
             </div>
           )
         })
       }
       </div>}
       
       </div>

    </div>
  )
}

export default Home
