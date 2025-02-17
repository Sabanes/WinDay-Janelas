import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <section id="Produtos" className='py-40 flex flex-col max-w-7xl mx-auto md:w-[90dvw]'>
      <h6 className='text-6xl md:text-8xl text-center md:pr-0 pr-4'>
        <span className='text-[var(--main)]'>Janelas e Portas</span> PVC
      </h6>
      
      <p className='self-left text-xl text-left py-7 pt-20 md:pl-0 pl-6 md:max-w-[80%] max-w-[90%]'>
        <span className='text-2xl font-bold'>Janelas PVC</span> <br />
        As janelas em PVC melhoram o isolamento térmico e acústico, aumentando a eficiência energética da casa. Para ajudar na escolha, entre em contato com a Janeland.
        <br /><br />
        <span className='text-2xl font-bold'>Portas PVC</span> <br />
        Nosso catálogo de portas exteriores em PVC oferece uma grande diversidade de modelos e soluções. Na Janeland, comercializamos portas em PVC aos melhores preços do mercado, garantindo sua satisfação.
        <br /><br />
        Os nossos produtos têm o CLASSE+, uma iniciativa da ADENE para facilitar a escolha de produtos energeticamente eficientes na reabilitação de edifícios. A etiqueta visa preencher a lacuna da ausência de uma etiqueta europeia obrigatória para produtos como janelas, isolamentos e tintas, que influenciam o desempenho energético dos edifícios, oferecendo aos consumidores uma referência simples e clara para soluções mais eficientes.
      </p>

      <img
        className='pb-10 w-[60%] md:w-[35%] max-w-[600px] self-center md:self-start lg:self'
        src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/w3vuoxbsply4va6k7vzb"
        alt="Image description"
      />  

      <div className='flex md:flex-row flex-col md:gap-20 gap-10 justify-between mx-auto max-w-7xl'>
        <div className='flex md:w-[50vw] w-[90vw] bg-[var(--main)] flex-col items-center rounded-lg py-8 px-4'>
          <div className='flex flex-col items-center  bg-white p-2 rounded-lg'>
            <img 
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/v1739035817/gt6bprxdoaadcjadfonh.avif" 
              className='max-w-[300px] z-10' 
              alt="" 
            />
          </div>
          <p className='max-w-sm text-white text-left text-lg pl-5 pt-5'>
            <span className='font-extrabold text-2xl'>A70</span> <br />
            Sistema batente de 70 mm de profundidade de aro fixo e uma capacidade máxima para envidraçados de 40 mm. As 5 câmaras no perfil conferem-lhe uma grande eficiência energética.
          </p>
        </div>

        <div className='flex md:w-[50vw] w-[90vw] flex-col items-center bg-[var(--main)] rounded-lg py-8 px-4'>
          <div className='flex flex-col items-center bg-white p-2 rounded-lg'>
            <img 
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gsjiz9rvlilfz1tw9g1s" 
              className='max-w-[300px] z-10' 
              alt="" 
            />
          </div>
          <p className='max-w-sm text-white text-left text-lg pl-5 pt-5'>
            <span className='font-extrabold text-2xl'>C70 de correr</span> <br />
            Sistema de janela e sacada de correr com 70 mm de profundidade no aro fixo e uma capacidade máxima para envidraçados de 24 mm. Apresenta um elevado grau de eficiência energética.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products