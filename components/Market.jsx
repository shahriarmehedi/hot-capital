import React from 'react'

function Market() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-44'>
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                <h3 className="text-3xl font-bold">Sobre el mercado</h3>
                <button className="bg-black text-white w-full lg:w-[300px] font-bold py-3 px-10 rounded-md">
                    Escribimos bien ; <span>)</span>
                </button>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
                <div className="">
                    <div className="bg-[#F8A703] p-10 h-[300px] rounded-t-2xl flex justify-center items-center">
                        <img src="Frame 25.png" alt="Market" />
                    </div>
                    <div className="bg-[#F8F4E8] p-7 rounded-b-2xl flex justify-center items-center">
                        <h3 className="text-2xl font-bold">
                            Macro 101: la inflación y sus
                            efectos en las políticas...
                        </h3>
                    </div>
                </div>
                <div className="">
                    <div className="bg-[#2F6CDF] p-10 h-[300px] rounded-t-2xl flex justify-center items-center">
                        <img src="Frame 26.png" alt="Market" />
                    </div>
                    <div className="bg-[#F8F4E8] p-7 rounded-b-2xl flex justify-center items-center">
                        <h3 className="text-2xl font-bold">
                            Macro 101: la inflación y sus
                            efectos en las políticas...
                        </h3>
                    </div>
                </div>
                <div className="">
                    <div className="bg-[#076241] p-10 h-[300px] rounded-t-2xl flex justify-center items-center">
                        <img src="Frame 31.png" alt="Market" />
                    </div>
                    <div className="bg-[#F8F4E8] p-7 rounded-b-2xl flex justify-center items-center">
                        <h3 className="text-2xl font-bold">
                            Macro 101: la inflación y sus
                            efectos en las políticas...
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Market