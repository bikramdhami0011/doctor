import React from 'react'

export async function GlobalApi() {
 const data= await fetch("http://localhost:1337/api/doctors?populate=*",{
    method:"get"
 })
 const rdata=await data.json();
 return rdata;
}

export default GlobalApi