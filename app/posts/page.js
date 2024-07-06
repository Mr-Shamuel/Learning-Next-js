import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const Allposts = async () => {
    const posts =await getAllPosts();
    console.log(posts,'s')
    return (
        <div>
            <h1 className='text-blue'>All posts</h1>
       <hr />

            {
                posts?.map((post) => {
                    return <li key={post.id}> <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link></li>
                })
            }
        </div>
    );
};

export default Allposts;