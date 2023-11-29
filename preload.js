window.addEventListener('DOMContentLoaded', () => {
    const fs = require('node:fs')
    const div = document.getElementById('listado')
    fs.readdir('archivos/', (err, archivos)=>{
        for(var archivo of archivos){
            var elementoArchivo = document.createElement('h3')
            elementoArchivo.innerHTML = archivo
            div.appendChild(elementoArchivo)
        }
    })
})