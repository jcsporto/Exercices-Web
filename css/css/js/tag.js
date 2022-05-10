document.querySelectorAll('.tab').forEach(elemento =>{
    const tagName = elemento.toLowerCase()

    elemento.style.borderColor = '#616161'

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.hasChildNodes[0])
    }
})