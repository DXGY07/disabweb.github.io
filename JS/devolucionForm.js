const codeSelector = document.getElementById('codigo');
const form = document.getElementById('formulario')

const selectOptions = {
    CADS: libros[0],
    CDUMA: libros[1],
    EAL: libros[2],
    EEX: libros[3],
    EPR: libros[4],
    ERDDG: libros[5]
}

const fieldsToRaise = ['titulo', 'autor', 'estante']

const dataSaved = ['numero', 'nombre', 'apellido', 
                    'curso', 'fechaS', 'fechaD']

const raiseTheFields = (elements, data, isEmpty) => {
    for(const element of elements){
        const item = document.getElementById(element);
        if(data) item.value = data[item.id]
        if(isEmpty) item.value = ''
    }
}
const getData = (fields, clearFields) => {
    for (const field of fields) {
        const item = document.getElementById(field)
        if(clearFields) item.value = ""
        else item.value = window.localStorage.getItem(field)
    }
}

codeSelector.addEventListener('change', () =>{
    if(
        window.localStorage.getItem('codigo') 
        != selectOptions[codeSelector.value].codigo
    ) {
        getData(dataSaved, true)
    }

    if (window.localStorage.getItem('codigo') === selectOptions[codeSelector.value].codigo){
        raiseTheFields(fieldsToRaise, selectOptions[codeSelector.value], false)
        getData(dataSaved, false)
    }
    else raiseTheFields(fieldsToRaise, selectOptions[codeSelector.value], true)
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    window.localStorage.clear()
    alert('Fue eliminado sastifactoriamente.')
    window.location.href = './Biblioteca.html'
})