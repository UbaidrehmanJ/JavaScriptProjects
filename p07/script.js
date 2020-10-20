const filterContainer = document.getElementById("filter-container");
const filter = document.getElementById("filter");
const postContainer = document.getElementById("post-container");
const post = document.getElementById("post");
const loader = document.getElementById("loader");


let page = 1;
let limit = 5;

async function getData() {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    console.log(data);
    return data;
}

async function postData() {
    const posts = await getData();
    posts.forEach( post => {
        console.log(post);
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div class="post-number" id='post-number'>${post.id}</div>
            <div class="post-title" id = 'post-title'>${post.title}</div>
            <div class="post-body" id="post-body">
                ${post.body}
            </div>
        `;
        postContainer.appendChild(postElement);
        
    })
}

postData();


function filterTerm(e) {
    const filterTerm = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post')
    posts.forEach( post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();

        if( title.indexOf(filterTerm) > -1 || body.indexOf(filterTerm) > -1 ) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
}


function showLoad() {
    loader.classList.add("show");
    page++;
    postData();
    setTimeout( () => {
        loader.classList.remove("show")
    }, 1000)
}

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight === scrollHeight) {
        showLoad();
    }
})

filter.addEventListener('input', filterTerm)