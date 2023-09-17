
const btn=document.querySelector('#btn')
const btn_delete=document.querySelector('#btn_delete')
const result=document.querySelector('#result')

function createPostMarkup(post) {
    return `<div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </div>`;
}

function addPost(result, post) {
    const postMarkup = createPostMarkup(post);
    result.insertAdjacentHTML('beforeend', postMarkup);
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
        const firstThreePosts = posts.slice(0, 3);
        firstThreePosts.forEach(post => addPost(result, post));
    })
    .catch(error => console.error(error));
}

btn.addEventListener("click", getPosts)


btn_delete.addEventListener("click", () => {
    resetData();
});

function resetData() {
    result.innerHTML = '';
}