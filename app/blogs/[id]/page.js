import { notFound } from 'next/navigation';
import React from 'react';

const blogPage = ({ params }) => {
    const { id } = params;
    
    if(id==3)
    {
        notFound();
    }
    return (
        <div>

            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">this is blog  {id}</h5>
            </a>


        </div>
    );
};

export default blogPage;