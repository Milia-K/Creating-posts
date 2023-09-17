
const btn=document.querySelector('#btn')
const result=document.querySelector('#result')
const result_error=document.querySelector('#result_error')
const btn_delete=document.querySelector('#btn_delete')

function createPost(titleText, bodyText) {
	const postData = {
		title: titleText,
		body: bodyText,
	};

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(json => {
        result.innerHTML = 
        `<h3>${json.title}</h3>
        <p>${json.body}</p>`;
    });
}

btn.addEventListener("click", () => {
    const titleText = document.querySelector('#title').value;
    const bodyText = document.querySelector('#body').value;
    createPost(titleText, bodyText);
});
btn_delete.addEventListener("click", () => {
    resetData();
});

function resetData() {
    result.innerHTML = '';
    document.querySelector('#title').value = '';
    document.querySelector('#body').value = '';
}

