import express  from "express";

const app = express();
app.use(express.json())

const clientes =[
    {id:1,nome:"wesley",cpf:"123.456.789-0"},
    {id:2,nome:"macksuel",cpf:"147.548.789-0"}
]

const funcionarios =[
    {id:1,nome:"marcos",cpf:"123.456.789-0"},
    {id:2,nome:"andre",cpf:"147.548.789-0"}
]







//rota principal
app.get('/',(req,res) =>{
    res.status(200).send("pagina inicial")
})
//consultar todos os clientes

app.get('/', (req,res) =>{
    res.status(200).json(clientes)
})

//cadastrar um novo cliente
app.post('/clientes',(req,res) =>{
    clientes.push(req.body)
    res.status(200).send("cliente cadastrado!!!")
})







//rota principal
app.get('/',(req,res) =>{
    res.status(200).send("pagina inicial")
})
//consultar todos os clientes

app.get('/funcionarios', (req,res) =>{
    res.status(200).json(funcionarios)
})

//cadastrar um novo cliente
app.post('/funcionarios',(req,res) =>{
    funcionarios.push(req.body)
    res.status(200).send("funcionario cadastrado!!!")
})



















export default app