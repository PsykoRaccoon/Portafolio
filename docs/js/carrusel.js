function inicializarCarruseles() {
    var carousel1 = new bootstrap.Carousel(document.getElementById('carouselExampleFade'), {
        interval: 2000
    });

    var carousel2 = new bootstrap.Carousel(document.getElementById('carouselExampleFade2'), {
        interval: 2000
    });

    var carousel3 = new bootstrap.Carousel(document.getElementById('carouselExampleFade3'), {
        interval: 2000
    });
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarCarruseles();
});



