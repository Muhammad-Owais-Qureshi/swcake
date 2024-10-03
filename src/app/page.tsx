import React from "react"
import Content from "./content"
import Images from "./image"


const Home = () => {
  return (
    <>
    <div className="mb-100%">
    <div className="bg-[url('/images/bg.jpg')] h-[500px] w-full bg-cover flex items-center">

     <p className="flex items-center justify-center w-44 text-2xl font-semibold text-white ml-8"> A beautifully decorated cake adorned with vibrant and good flavor</p>

      </div>
    </div>
    <Content/>
   
    <Images/>
    
    </>
  )
}

export default Home
