import getAllPosts from '@/lib/getAllPosts';
import { getCommentsPost } from '@/lib/getComments';
import { getPost } from '@/lib/getPost';
import React from 'react';

export  async function generateMetadata({params}){
    const {id} =params;
    const post =await getPost(id);
    return{
        title: post.title,
        description: post.body
    }
    
   
}

const page = async({params}) => {
    const {id} =params;
    // const post = await getPost(id); 
    //if we want to call to api at a time
    const postPromises =  getPost(id);
    const commentPromises =  getCommentsPost(id);


    const [post, comments] = await Promise.all([postPromises, commentPromises])
    return (
        <div>
            <h1 className=''>{post.title}</h1>
            <p className='text-blue-200'>{post.body}</p>
            <hr />
            <h1 className='bg-red-400'>All Comments: {comments?.length}</h1>
            {
                comments.map((comment)=><li key={comment.id}> {comment.body}</li>)
            }
   
        </div>
    );
};

export default page;


export async function  generateStaticParams(){
    const posts=await getAllPosts();
    return posts.map((post) => ({
        id: post.id.toString(),
    }))
}