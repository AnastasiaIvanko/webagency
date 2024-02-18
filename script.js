


document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('gallery'), {
        plugins: [lgThumbnail, lgFullscreen],
        speed: 500
    });
});



document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.getElementById('horizontal-images'), {
        selector: 'a',
        mode: 'lg-fade',
        download: false,
        counter: false,
        mousewheel: false,
        swipeThreshold: 50
    });
});
