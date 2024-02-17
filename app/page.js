'use client'
import React, { useEffect, useState } from 'react'
import Hero from './component/Hero'
import GlobalApi from './component/GlobalApi'
import Image from 'next/image'

function Home() {
const name="birkamdhami"
  const [cimg, setcimg] = useState([])
  const myFun = async () => {
    const mydata = await GlobalApi()

    setcimg(mydata)
  }
  useEffect(() => {
    myFun()
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
        {cimg.data?.map((item, index) => {
          return (
            index <= 5 && (
              <div
                key={index}
                className=" bg-blue-100 flex flex-col text-center gap-2 justify-center items-center m-2 p-2 shadow-md hover:shadow-lg transition-all ease-in-out scale-100 duration-500"
              >
                <Image
                  src={item.attributes.icon.data.attributes.url}
                  height={100}
                  width={100}
                ></Image>
                <h2>{item.attributes.name}</h2>
              </div>
            )
          )
        })}
      </div>
      
    </div>
  )
}

export default Home
