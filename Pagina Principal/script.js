const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

// Ajusta o slide ao tamanho da primeira imagem
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Função para mover o slide automaticamente
function nextSlide() {
    counter++;
    if (counter >= images.length) {
        counter = 0; // Reseta o contador para voltar à primeira imagem
    }
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Trocar imagem a cada 3 segundos
let slideInterval = setInterval(nextSlide, 500);

// Para evitar transições indesejadas ao recarregar
window.addEventListener('load', () => {
    clearInterval(slideInterval);
    setTimeout(() => {
        slideInterval = setInterval(nextSlide, 2000);
    }, 500);
});
