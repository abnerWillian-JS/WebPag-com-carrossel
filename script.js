//pegando os elementos('imagens') do primeiro carrossel
const images1 = document.querySelectorAll('.jogos section')

//pegando os elementos('imagens') do segundo carrossel
const images2 = document.querySelectorAll('.filmes section')

//pegando os elementos('imagens') do terceiro carrossel
const images3 = document.querySelectorAll('.animes section')

//tamanho do index
let imgIndex = 0

//pegando e adicionanco evento no primeiro botao
const first = document.querySelector('#first')

first.addEventListener('click', () => {
    carrossel(images1)
})

//pegando e adicionanco evento no segundo botao
const second = document.querySelector('#second')

second.addEventListener('click', () => {
    carrossel(images2)

})

//pegando e adicionanco evento no terceiro botao
const third = document.querySelector('#third')

third.addEventListener('click', () =>{
    carrossel(images3)
})

//funçao do carressel reutilizavel
function carrossel(images) {
    images[imgIndex].classList.remove('square')
    imgIndex++

    const max = images.length

    if (imgIndex >= max) {
        imgIndex = 0
    }
    
    images[imgIndex].classList.add('square')
}
