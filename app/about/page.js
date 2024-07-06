import Image from 'next/image';
import React from 'react';
import thumb from "@/public/images/sam.PNG"

const page = () => {
    return (
        <main className='p-6 bg-yellow-500 '>
           this is about pages

            <Image src={thumb} alt='thumb'/>
        </main>
    );
};

export default page;