document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('gallery'), {
        plugins: [lgThumbnail, lgFullscreen],
        speed: 500
    });
});
