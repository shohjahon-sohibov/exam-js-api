
// DOM elements
const elPostListOutput = $_('.js-posts-output');
const elPostTemplate = $_('#js-post-template').content;

const postFragment = document.createDocumentFragment(); // fragment to keep space before come 

// ============================================
// ======= render function  ==========
// ============================================

const postFunction = function(id) {
function renderPost(posts) {
  let elPost = elPostTemplate.cloneNode(true)
  
  elPost.querySelector('.post-title').textContent = posts.title;
  elPost.querySelector('.post-body').textContent = posts.body;
  elPost.querySelector('.js-post-button').setAttribute('data-id', `${posts.id}`);
  
  postFragment.appendChild(elPost);
}

// ============================================
// ======= fetch link  ==========
// ============================================

fetch(`${FetchUrl}/posts`)
.then((res) => res.json())
.then((data) => eachPost(data));


function eachPost(arr) {
  let postFilter = arr.filter((e) => e.userId == id)

  postFilter.forEach((posts) => {
    renderPost(posts);
  });

  elPostListOutput.appendChild(postFragment);
};

}

elUserListOutput.addEventListener('click', (e) => {
  elPostListOutput.innerHTML = ''
  let id = e.target.dataset.id
  console.log(id);
  postFunction(id)
})