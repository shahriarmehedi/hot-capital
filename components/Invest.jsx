import React from 'react'

function Invest() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0'>
            <h1 className='text-5xl font-bold text-[#2F6CDF] mt-20'>
                Cómo invertir
            </h1>


            <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between mt-10">
                <div>
                    <h3 className='text-xl lg:text-3xl text-text-black'>
                        1. Solicita una llama a  e presentación
                    </h3>
                </div>
                <div className='flex gap-10 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                    <button className='bg-[#F8A703] text-white font-bold py-3 w-[250px] px-5 rounded-lg ml-5'>
                        Agenda!
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between mt-10">
                <div>
                    <h3 className='text-xl lg:text-3xl text-text-black'>
                        2. Llena el formulario con tu información
                    </h3>
                </div>
                <div className='flex gap-10 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                    <button className='bg-[#F8A703] text-white font-bold py-3 w-[250px] px-5 rounded-lg ml-5'>
                        Llena!
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between mt-10">
                <div>
                    <h3 className='text-xl lg:text-3xl text-text-black'>
                        3. Deposita en banco o envía crypto
                    </h3>
                </div>
                <div className='flex gap-10 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                    <button className='bg-[#F8A703] text-white font-bold py-3 w-[250px] px-5 rounded-lg ml-5'>
                        Deposita!
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between mt-10">
                <div>
                    <h3 className='text-xl lg:text-3xl text-text-black'>
                        4. Espera pacientemente tus reportes trimestrales
                    </h3>
                </div>
                <div className='flex gap-10 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                    <button className='bg-[#F8A703] text-white font-bold py-3 w-[250px] px-5 rounded-lg ml-5'>
                        Espera!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Invest