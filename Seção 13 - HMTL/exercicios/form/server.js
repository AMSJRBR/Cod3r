const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

 // Se utilizarmos o get os dados vem no (console.log(req.query) enquanto no post (console.log(req.body)))
 // Falha de segurança quando se usa o GET em formulário, pois os dados ficam na URL (dados sensiveis como senha)
 // Em formulários a melhor opção seria o POST, lembrando que para melhor segurança o correto e o HTTPS
app.get('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send('Parabéns. Usuário Incluído!')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Parabéns. Usuário Alterado!')
})

app.listen(5500)