const posts=[];
let currentId=1;

function addPost(post){
    const newPost = {...post, id:currentId++};
    posts.push(newPost);
    return newPost;
}

function getAllPost(){
    return JSON.parse(JSON.stringify(posts));
}

function getPostById(id){
    return posts.find(i=>i.id===id);
}

function replacePostById(id,newPost){
    const PostIndex = getPostIndexById(id);
    const updatedPost={...newPost, id};
    posts[postIndex]=updatedPost;
    return updatedPost;
}

// function updatedPostById(id,newPost){
//     const postIndex= getPostIndexById(id);
//     const post= posts[postIndex];
//     post.author= newPost.author || post.author;
//     post.content= newPost.content || post.content;
//     return post;
// }

function deletePostById(id){
    const postIndex= getPostIndexById(id);
    const deletedPost= posts.splice(postIndex, 1);
    return deletedPost;
}

function doesIdExist(id){
    const postIndex= getPostIndexById(id);
    return postIndex !==-1;
}

function getPostIndexById(id){
    return posts.findIndex(i=>i.id===id);
}

module.exports={
    getAllPost,
    getPostById,
    updatedPostById,
    replacePostById,
    deletePostById,
    addPost,
    doesIdExist
};