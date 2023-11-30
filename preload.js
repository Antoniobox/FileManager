/**
 * Recoge la información de los archivos del directorio archivos
 */
function generarInformacionArchivos() {
    window.addEventListener('DOMContentLoaded', () => {
        const fs = require('node:fs')
        const divNombres = document.getElementById('listadoNombres')
        const divTamanos = document.getElementById('listadoTamano')
        fs.readdir('archivos/', (err, archivos)=>{
            for(var archivo of archivos){
                var elementoArchivo = document.createElement('h3')
                elementoArchivo.innerHTML = archivo
                divNombres.appendChild(elementoArchivo)
                fs.stat('archivos/'+archivo, (err, stats)=>{
                    if(err) {
                        alert('No se ha podido leer el archivo')
                    } else {
                        var elementoTamano = document.createElement('h3')
                        elementoTamano.innerHTML=stats.size + "B"
                        divTamanos.appendChild(elementoTamano)
                    }
                })
            }
        })
    })
}

generarInformacionArchivos()