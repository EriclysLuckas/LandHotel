const images = document.querySelectorAll('.carousel img');
const secao = document.querySelector('.carousel');
let timeoutId;

// Define a função para adicionar a classe ".ativo" à próxima imagem
function nextImage(index) {
  secao.style = 'display:flex;'

  // Remove a classe ".ativo" de todas as imagens
  images.forEach((image) => image.classList.remove('ativo'));

  // Define o índice da próxima imagem
  const nextIndex = (index + 1) % images.length;

  // Adiciona a classe ".ativo" à imagem atual
  images[index].classList.add('ativo');

  // Chama a função "nextImage" para a próxima imagem após 1 segundo
  timeoutId = setTimeout(() => {
    nextImage(nextIndex);
  }, 5000);
}

// Inicia o carrossel de imagens
nextImage(0);

// Adiciona eventos de mouseover e mouseout a cada imagem individualmente
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    clearTimeout(timeoutId);
    images.forEach((img) => img.classList.remove('ativo'));
    image.classList.add('ativo');
  });

  image.addEventListener('click', () => {
    nextImage(index);
  });
});
