const express = require ('express')
const aplicacion = express()
const puerto = 2003

aplicacion.get('/', (req,res)=> {
    res.send('Esta es un comentario al foro')
} )

aplicacion.listen(puerto, ()=> {
    console.log (`Example app listening on port ${puerto}`)
} )