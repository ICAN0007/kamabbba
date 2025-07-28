// script.js

function createGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = "";

  mediaItems.forEach((item, idx) => {
    const elem = document.createElement('div');
    elem.className = "gallery-item";
    elem.onclick = () => openModal(idx);

    elem.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <div class="title">${item.title}</div>
    `;
    gallery.appendChild(elem);
  });
}

function openModal(idx) {
  const item = mediaItems[idx];
  let modalRoot = document.getElementById('modal-root');
  modalRoot.innerHTML = `
    <div class="modal" onclick="closeModal(event)">
      <div class="modal-content" onclick="event.stopPropagation()">
        <span class="close" onclick="closeModal(event)">&times;</span>
        <h2>${item.title}</h2>
        <video controls src="${item.videoUrl}" poster="${item.thumbnail}"></video>
        <p>${item.description}</p>
      </div>
    </div>
  `;
}

function closeModal(event) {
  if (event) event.stopPropagation();
  document.getElementById('modal-root').innerHTML = "";
}

// Initialize the gallery when the page loads
window.onload = createGallery;
