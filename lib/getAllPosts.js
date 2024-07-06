export default async function getAllPosts(){

    // const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',

        {
// cache:"no-store" //not make cache
next:{
    revalidate:10 //it will checke after 10 sec 
}
        }
    )

return result.json();
}