"use client"
import React from 'react'
import Marquee from '../components/marque/marque'
import TextGenerateEffect from '../components/ui/gen'

const words = 'Somos especialistas na venda e instalação de janelas de metaloplástico com perfil Cortizo oferecendo soluções que combinam inovação, estética e eficiência energética para casas e negócios'

const Sobre = () => {
  return (
    <div className='w-[100dvw]' id='About'>
        <Marquee />
        <TextGenerateEffect words={words} />
    </div>
  )
}

export default Sobre