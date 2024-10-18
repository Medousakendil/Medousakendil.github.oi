function openModal(imageSrc, title) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModalLabel').innerText = title;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}
