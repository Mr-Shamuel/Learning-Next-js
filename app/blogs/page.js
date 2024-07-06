import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    const blogsData=[
        {
            id:1,
            title:"blog 1",
            description:"blog 1 description",
        },
        {
            id: 2,
            title: "blog 2",
            description: "blog 2 description",
        }
    ]
    return (
        <div>
            {
                blogsData?.map((blog)=>
                {
                    return <li key={blog.id}> <Link href={`/blogs/${blog.id}`}>
                        {blog.title}
                        </Link></li>
                })
            }
        </div>
    );
};

export default Blogs;