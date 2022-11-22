import _ from 'lodash'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const app = express()
const port = 4444

const usuarios = []

app.use(express.json())

app.get(
    '/api/usuarios', 
    (req, res) => {
        const { nome, email } = req.query
        const usuariosEncontrados = _.filter(usuarios, { nome })
        res.send(usuariosEncontrados)
    }
)

app.post(
    '/api/usuarios', 
    (req, res) => {
        const id = uuidv4()
        const user = { ...req.body, id }
        usuarios.push(user)
        res.send(user)
    }
)

app.delete(
    '/api/usuarios/:id', 
    (req, res) => {
        const { id } = req.params
        const usuariosRemovidos = _.remove(usuarios, { id })
        if (usuariosRemovidos.length === 0) {
            res.status(400).send()
        } else {
            res.send(usuariosRemovidos)
        }
    }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})