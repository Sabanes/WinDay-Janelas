import Link from 'next/link'
import React from 'react'

const Button = ({text, href}) => {
  return (
    <a className='mx-auto' href={href}>
    <button className="hover:shadow-[inset_0_0_0_2px_#344CB7] md:mt- mt-8 mx-auto md:text-md text-xs  text-white px-10 py-3 rounded-full tracking-widest uppercase font-bold  bg-[#493F0B] hover:bg-transparent hover:text-[#344CB7]  transition duration-200">
        {text}
    </button>
    </a>
  )
}

export default Button