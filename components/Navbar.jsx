'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Navbar() {


    return (
        <div className=' py-4 border-b border-gray-200 sticky top-0 bg-white z-50'>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-5 2xl:px-0">
                <div className="">
                    <Link href="/">
                        <img src="/Logo.png" alt="logo" className='h-16' />
                    </Link>
                </div>
                <div className="gap-5 items-center hidden lg:flex">
                    <ul className="flex justify-end">
                        <li className="px-4 cursor-pointer">Empieza</li>
                        <li className="px-4 cursor-pointer">Inversión</li>
                        <li className="px-4 cursor-pointer">Blog</li>
                        <li className="px-4 cursor-pointer">Contacto</li>
                    </ul>
                    <button className="border-gray-700 border  font-bold py-2 px-10 rounded-md">
                        App
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
