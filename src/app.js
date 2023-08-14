import express from 'express' // importar o express

const app = express() // criar uma instancia dp express

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes', (req, res) =>{
    res.send('Lista de seleções')
})

export default app // exportando a constante app que é uma instacia do express