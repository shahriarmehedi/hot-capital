'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";


function Call() {
    return (
        <div className=' mt-44 bg-[#076241] py-20'>
            <div className="flex flex-col lg:flex-row gap-20 justify-between max-w-7xl mx-auto px-5 2xl:px-0 text-white">
                <div className='w-full lg:w-1/2'>
                    <div className='lg:w-4/5 mx-auto'>
                        <h2 className='text-5xl font-bold'>Es más fácil en una llamada</h2>
                        <p className='text-xl mt-20'>Hablemos de tus objetivos y cómo podemos ayudarte a alcanzarlos</p>
                        <div className="mt-20 flex justify-between">
                            <img src="Group 20.png" alt="ETF" className=' h-10' />
                            <img src="Group 20.png" alt="ETF" className=' h-10 relative right-16 rotate-180 ' />
                        </div>
                        <p className=' mt-20'>*La asesoría financiera es gratuita ;) y nos encanta hablar.</p>
                    </div>

                </div>

                <div>
                    {/* calendly calender */}
                    <InlineWidget url='https://calendly.com/sau-shahriar/30min' />
                </div>
            </div>
        </div>
    )
}

export default Call