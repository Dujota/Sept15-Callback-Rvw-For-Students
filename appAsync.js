// pretend server
const posts = [
  {title: 'Post One', body: 'This is my first post'},
  {title: 'Post Two', body: 'This is my second post'}
];

function createPost (post, callback) { // pass a callback here
  setTimeout(function () {
    posts.push(post)
    callback(); // invoke the callback here, it can be any function we pass in and all this does is just invoke
  },2000)
}

function getPost (post) {
  setTimeout(function () {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });

    document.body.innerHTML = output
  }, 1000)
}

createPost({title: "Post Three", body: "This is my third Post"}, getPost)

getPost()