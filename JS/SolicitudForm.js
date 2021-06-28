const form = document.getElementById('formulario');

const userFields = ['nombre', 'apellido', 'correo', 
                   'telefono', 'curso', 'numero', 'fechaS', 
                    'fechaD', 'titulo', 'autor', 'codigo', 'estante']
const fieldsToRaise = ['titulo', 'autor', 'estante']
const raiseTheFields = (elements, data, isEmpty) => {
    for(const element of elements){
        const item = document.getElementById(element);
        if(data) item.value = data[item.id]
        if(isEmpty) item.value = ''
    }
}
const insetData = (fields) => {
    for (const field of fields) {
        const item = document.getElementById(field)
        window.localStorage.setItem(field, item.value)
    }
}

const codeSelector = document.getElementById('codigo');

const selectOptions = {
    CADS: libros[0], CDUMA: libros[1], EAL: libros[2],
    EEX: libros[3], EPR: libros[4], ERDDG: libros[5]
}

codeSelector.addEventListener('change', () => {
    if (selectOptions[codeSelector.value]) raiseTheFields(fieldsToRaise, selectOptions[codeSelector.value])
    else raiseTheFields(fieldsToRaise, selectOptions[codeSelector.value], true)
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Viste que vacaneria')
    window.location.href = './Biblioteca.html'
    insetData(userFields);
})