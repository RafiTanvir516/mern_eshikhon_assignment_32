function inputPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
inputPost();
function displayPost(posts) {
  const mainDiv = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h3>Id:${post.id}</h3>
    <h3>Title:${post.title}</h3>
    <p>${post.body}</p>
    `;
    mainDiv.append(div);
  }
}
