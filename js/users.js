const FetchUrl = 'https://jsonplaceholder.typicode.com'; // get fetch link in const

// DOM elements
const elUserListOutput = $_('.js-users-output');
const elUserTemplate = $_('#js-user-template').content;

const userFragment = document.createDocumentFragment(); // fragment to keep space before come 

// ============================================
// ======= render function  ==========
// ============================================

function renderUsers(object) {
  let elUser = elUserTemplate.cloneNode(true);
  elUser.querySelector('.name').textContent = `Name: ${object.name}`
  elUser.querySelector('.user-name').textContent = `Username: ${object.username}`
  elUser.querySelector('.email').textContent = object.email
  elUser.querySelector('.email').href = `mailto:${object.email}`
  elUser.querySelector('.address').textContent = `street: ${object.address.street}, suite: ${object.address.suite}, city: ${object.address.city}.`
  elUser.querySelector(".js-user-button").setAttribute("data-id", `${object.id}`);
  
  userFragment.appendChild(elUser);
}

function eachUsers(array) {
  array.forEach((object) => {
    renderUsers(object);

  });

  elUserListOutput.appendChild(userFragment)
};

// ============================================
// ======= fetch link  ==========
// ============================================

fetch(`${FetchUrl}/users`)
    .then((res) => res.json())
    .then((data) => eachUsers(data));