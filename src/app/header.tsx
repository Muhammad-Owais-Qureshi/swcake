import Link from "next/link"
import React from "react"
const Header = () => {
  return (
    <>
    <main>
      <header className=' flex justify-between align-middle h-16'>
        <div className='text-3xl font-bold flex items-center ml-4 text-pink-500'>Cake Shop</div>
        <div>
            <nav>
                <ul className='font-bold flex mt-5 mr-8 gap-6 text-pink-500'>

                <Link href={"/"}><li>Home </li></Link>
                <Link href={"/about"}> <li>About</li></Link>
                <Link href={"/contact"}> <li> Contact </li></Link>
                <Link href={"/shop"}><li> Shop </li></Link>

                </ul>
            </nav>
        </div>
        
    </header>
    </main>
  
    </>
  )
}

export default Header