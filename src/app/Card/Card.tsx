import React from 'react'
import Image from 'next/image'
import bg from '../../../public/images/cake.jpg'


const Card= () => {
  return (
    <div className="card ml-4 w-56 h-64 bg-white">
      <Image
      className='h-40 '
      src={bg}
      alt='pic'
      width={230}
      height={200}
      style={{
        objectFit: 'cover',
      }}
      />
     
      <h1 className='text-2xl font-semibold text-center'>Cocolate Cake</h1>
      <p className='font-semibold text-center'>40$.</p>
     
     <div className='flex justify-center'> 
      <button className='btn font-bold p-1'>Add to Cart</button>
      </div>
     
    </div>
  )

}
export default Card