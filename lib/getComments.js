export const getCommentsPost = async (id) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return result.json();
}

