import Image from 'next/image'
import React from 'react'

export default function ServicePoint({name}) {
  return (
    <div className='flex gap-2 text-xs lg:text-sm'>
    <Image
      src={'/images/icons/CheckedIcon.svg'}
      alt='checked icon'
      width={20}
      height={20}
    />
    {name}
  </div>
  )
}
