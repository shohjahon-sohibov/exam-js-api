// DOM elements
const elCommentListOutput = $_('.js-comments-output');
const elCommentTemplate = $_('#js-comment-template').content;

const commentFragment = document.createDocumentFragment(); // fragment to keep space before come 

// ============================================
// ======= render function  ==========
// ============================================

let commentFunction = function(id) {
function renderComment(comments) {
  let elComment = elCommentTemplate.cloneNode(true)
  
  elComment.querySelector('.comment-title').textContent = comments.name;
  elComment.querySelector('.comment-email').textContent = comments.email;
  elComment.querySelector('.comment-email').href = `mailto:${comments.email}`;
  elComment.querySelector('.comment-body').textContent = comments.body;
  
  commentFragment.appendChild(elComment);
}

function eachComment(arr) {
  let commentFilter = arr.filter((e) => e.postId == id)
  commentFilter.forEach((comments) => {
    renderComment(comments);
  });

  elCommentListOutput.appendChild(commentFragment);
};

// ============================================
// ======= fetch link  ==========
// ============================================

fetch(`${FetchUrl}/comments`)
  .then((res) => res.json())
  .then((data) => eachComment(data));
}

elPostListOutput.addEventListener('click', (e) => {
  elCommentListOutput.innerHTML = ''
  let id = e.target.dataset.id
  commentFunction(id)
})