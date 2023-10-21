function albumData() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => displayData(data));
}
albumData();
function displayData(albums) {
  for (const album of albums) {
    const mainDiv = document.getElementById("albums");
    const div = document.createElement("div");
    div.classList.add("album");
    div.innerHTML = `
    <h3>ID:${album.id}</h3>
    <h5>Album Title:${album.title}</h5>
    `;
    mainDiv.appendChild(div);
  }
}
