const codigos = document.getElementsByClassName('codigoClass');
const displayUserData = document.querySelectorAll('.cajaC')
const verMasButton = document.getElementsByClassName('btn-open-popup');

const userData = ['nombre', 'apellido', 'correo', 
                   'telefono', 'curso', 'numero', 'fechaS', 
                    'fechaD',]

function getSelectedCodigo(param){
    for(let i = 0; i < param.length; i++){
            if(param[i].innerHTML.split('Código: ')[1] === window.localStorage.getItem('codigo'))
                return param[i]
        }
}

const selectedCodigo = getSelectedCodigo(codigos) ? getSelectedCodigo(codigos) : null;

const getData = (fields) => {
    for(const arr of displayUserData){
        for(const field of fields){
            if(selectedCodigo){
                const item = arr.getElementsByClassName(field)[0]
                item.innerHTML = window.localStorage.getItem(field)
            }
        }
        arr.setAttribute('style', 'display: block;')
    }
}

getData(userData)

if(selectedCodigo){
    const card = selectedCodigo.parentNode.parentNode
    const estado = card.getElementsByTagName('strong')[1];
    const btn = card.getElementsByTagName('a')[0];
    

    console.log(selectedCodigo, card)

    btn.setAttribute('style', 'display: block;')
    estado.innerHTML = 'Estado: No Disponible'
}