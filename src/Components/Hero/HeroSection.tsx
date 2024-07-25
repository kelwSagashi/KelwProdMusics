import React from 'react'

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 md:mt-20">
        <h1 className="text-4xl sm:text-6xl md:text7xl text-center tracking-wide">
            <span className='bg-gradient-to-r from-emerald-600 to-blue-900
                             text-transparent bg-clip-text font-semibold'>
                KelwProd Records
            </span>, um repositório de músicas para curiosos
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl '>
            A espera acabou! As tracks, singles e lost midia estão todas reunidas em um só lugar
        </p>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop
                className='rounded-lg w-1/2 border border-orange-500 shadow-orange-300
                            mx-2 my-4'>
                <source src='/Videos/Video1.mp4' type='video/mp4'/>
                Seu Browser não suporta esse vídeo
            </video>
        </div>
    </div>
  )
}

export default HeroSection