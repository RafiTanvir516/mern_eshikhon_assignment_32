function loadAlbums() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayAlbums(data));
}
loadAlbums();
function displayAlbums(albums) {
  const mainDiv = document.getElementById("photos");
  for (const album of albums) {
    const div = document.createElement("div");
    div.classList.add("photo");
    div.innerHTML = `
    <h3>ID:${album.id}</h3>
    <p>Title${album.title}</p>
    <img src="${album.url}">
    `;
    mainDiv.appendChild(div);
  }
}
