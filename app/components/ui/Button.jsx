import Link from 'next/link'
import React from 'react'

const Button = ({text, href}) => {
  return (
    <a className='mx-auto' href={href}>
    <button className="shadow-[inset_0_0_0_2px_#fff] md:mt-10 mt-8 mx-auto md:text-md text-xs  text-white px-10 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent bg-[#344CB7] hover:bg-transparent hover:text-[#344CB7]  transition duration-200">
        {text}
    </button>
    </a>
  )
}

export default Button