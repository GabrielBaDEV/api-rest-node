import app from './src/app.js' // importando o app de app.js

const PORT = 3000 // definir a porta

// escutar a porta 3000, requisições que serão feitas para a porta
app.listen(PORT, ()=> {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
