import React from 'react'

function Hero() {
    return (
        <div className=' max-w-7xl mx-auto px-5 2xl:px-0'>
            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between py-20">
                <div className="lg:w-1/2">
                    <h1 className="text-5xl font-bold ">Crypto para Inversores Cautelosos</h1>
                    <p className="text-xl mt-4">Nos adaptamos al ciclo económico para
                        proteger y hacer crecer tu inversión</p>
                    <button className="bg-[#076241] hover:bg-green-900 text-white font-bold py-3 px-7 rounded-lg mt-14">Invertir desde $1000 dólares</button>
                </div>
                <div className="lg:w-1/2 flex lg:justify-end">
                    <img src="image 47.png" alt="Hero" className='w-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero