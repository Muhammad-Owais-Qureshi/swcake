import React from 'react'
import Image from 'next/image'


const Images = () => {
  return (
    <div className='flex justify-center gap-4 mt-5'>
        <Image
        src="/images/bg-card.jpg"
        alt='cake'
        width={250}
        height={250}
        />
        <Image
        src="/images/cake.jpg"
        alt='cake'
        width={250}
        height={250}
        />
        <Image
        src="/images/cake2.jpg"
        alt='cake'
        width={250}
        height={250}
        />
        <Image
        src="/images/cake4.jpg"
        alt='cake'
        width={250}
        height={250}
        />
        
    </div>
  )
}

export default Images