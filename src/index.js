const express = require('express')  //import express installed

const app = express()  //express es funcioin que devuelve objeto que se guarda en app con toda la config deol servidor(metodos, rutas)

app.listen(3000) //puerto
console.log('Server on port ', 3000)