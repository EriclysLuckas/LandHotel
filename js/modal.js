let modal = document.querySelector('.modal');
let fecharModal = document.querySelector('.fecharmodal');
let saibamais = document.querySelectorAll('.saibaMaisbtn');

const body = document.querySelector("body")


 saibamais.forEach(abremodal => {

    abremodal.addEventListener('click', (e) => {

        body.style.overflow = 'hidden'
        modal.style.display = 'flex'


        console.log("teste")
        modal.showModal();
    })
});


fecharModal.addEventListener('click', () => {
    modal.style.display = 'none'

    body.style.overflow = ''
	modal.close()
})