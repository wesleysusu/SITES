import express  from "express";

const app = express();
app.use(express.json())

const clientes =[
    {id:1,nome:"wesley",cpf:"123.456.789-0"},
    {id:2,nome:"macksuel",cpf:"147.548.789-0"}
]




//rota principal
app.get('/',(req,res) =>{
    res.status(200).send("pagina inicial")
})
//consultar todos os clientes

app.get('/clientes', (req,res) =>{
    res.status(200).json(clientes)
})

//cadastrar um novo cliente
app.post('/clientes',(req,res) =>{
    clientes.push(req.body)
    res.status(200).send("cliente cadastrado!!!")
})

//função que realiza a busca por id

function buscarClientes(id){
    return clientes.findIndex(clientes => clientes.id == id)
}

//consultar cliente por id

app.get('/clientes/:id',(req,res) =>{
let index = buscarClientes(req.params.id)
res.json(clientes[index]);})

app.put('/clientes/:id',(req,res) => {
    let index = buscarClientes(req.params.id)
    clientes[index] = req.body

    res.json(clientes)

})

//excluir cliente por id
app.delete('/clientes/:id',(req,res) =>{
    let index = buscarClientes(req.params.id)
    clientes.splice(index,1)
    res.send("cliente eliminado")

})






export default app






