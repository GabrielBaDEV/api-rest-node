import express from 'express' // importar o express

const app = express() // criar uma instancia dp express


// mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:1, selecao: 'Suiça', grupo: 'G'},
    {id:1, selecao: 'Sérvia', grupo: 'G'},
    {id:1, selecao: 'Camarões', grupo: 'G'},
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app // exportando a constante app que é uma instacia do express