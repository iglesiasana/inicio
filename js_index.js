const toggleButton = document.getElementsByClassName('boton_menu')[0]
const bandejaRecursos = document.getElementsByClassName('bandeja_recursos')[0]

toggleButton.addEventListener('click', () => {
    bandejaRecursos.classList.toggle('active')
})