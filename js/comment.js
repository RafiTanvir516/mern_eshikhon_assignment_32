function inputComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}
inputComments();
function displayComments(comments) {
  const mainDiv = document.getElementById("comments");
  for (const comment of comments) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
    <h3>ID:${comment.id}</h3>
    <h3>Name:${comment.name}</h3>
    <h3>Email:${comment.email}</h3>
    <p>${comment.body}</p>
    `;
    mainDiv.appendChild(div);
  }
}
