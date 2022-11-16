//Server para conexão Equipamentos com Mongodb
//usa mongoConect.js
const Inventario = require('./mongoConect')
const express = require('express');
const app = express();
const routers = express.Router();
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.json())
app.use(express.json());
app.use(routers);
//require('dotenv').config()
var cors = require("cors");

app.use(cors());

app.use((req,res,next) => {
    console.log("Cors habilitado");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header",'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        res.status(200).send({})
    }
   next()
   })

app.get('/equiplist', async (req, res) =>{
    try{
       const inventario = await Inventario.find()
        res.status(200).json({inventario})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

 //Create temps
 app.post('/', async (req, res) =>{
    const {patrimonio,equipamento, marca, modelo, Serial,localizacao } = req.body
    
    const inventario = {patrimonio,equipamento, marca, modelo, Serial,localizacao}
    const create_equip = new Inventario(req.body);
    //inventario.save()
        try{
            await Inventario.create(inventario)
            //inventario.save()
            console.log(inventario)
            res.status(201).json({message: "Equipamento inserido"})
            }catch(error){
            res.status(500).json({error: error})
        }  
    })
    
   
    
const PORT = process.env.PORT || 3001;
app.listen(PORT,function(){
        console.log("Servidor Rodando");
        })
