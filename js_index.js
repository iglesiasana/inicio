const iconoMenu = document.getElementsByClassName('contenedor_icono_menu')[0]
const contenedorLinksCabecera = document.getElementsByClassName('nav')[0]
const toggleButton = document.getElementsByClassName('boton_menu')[0]
const bandejaRecursos = document.getElementsByClassName('bandeja_recursos')[0]
const botonSerie = document.getElementsByClassName('serie')[0]
const bandejaIdealYrelevante = document.getElementsByClassName('bandeja_ideal_y_relevante')[0]
const cuerpoPagina = document.body

iconoMenu.addEventListener('click', () => {
    contenedorLinksCabecera.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
    bandejaRecursos.classList.toggle('active')
})

botonSerie.addEventListener('click', () => {
    bandejaIdealYrelevante.classList.toggle('active')
})

