import React from 'react'

function Hero2() {
    return (
        <div className='bg-[#F8F4E8]'>
            <div className=' max-w-7xl mx-auto px-5 2xl:px-0'>
                <div className="flex  flex-col lg:flex-row gap-14 items-center justify-between py-20">
                    <div className="lg:w-1/2 flex lg:justify-start">
                        <img src="image 45.png" alt="Hero" className='w-[400px]' />
                    </div>
                    <div className="lg:w-1/2 lg:text-right">
                        <h1 className='text-5xl font-bold text-[#2F6CDF]'>Invertir en crypto
                            es complicado.
                        </h1>
                        <h1 className='text-5xl font-bold mt-20 text-[#2F6CDF]'>
                            Lo sabemos.
                        </h1>
                        <p className='text-lg mt-20 text-[#2F6CDF]'>pero no tiene porqué serlo
                            nosotros nos encargamos
                            (sí, hasta de tus impuestos)</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero2