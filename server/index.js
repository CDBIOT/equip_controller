const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
host: "localhost",
user: "root",
password: "Prog_2022",
//database: "equipamentos"
database: "sbd" 
})

app.use(cors());
app.use(express.json());

app.get('/ShowProducts',(req,res)=>{
    let SQL = 
   "SELECT * from products";
    db.query(SQL,( err, result)=> 
   {
    if (err) console.log(err);
        else res.send(result);
    });
});

app.get('/',(req,res)=>{
    let SQL = 
   "SELECT * from inventario";
    db.query(SQL,( err, result)=> 
   {
    if (err) console.log(err);
        else res.send(result);
    });
});
app.get('/users',(req,res)=>{
    let SQL = 
   "SELECT * from users";
    db.query(SQL,( err, result)=> 
   {
    if (err) console.log(err);
        else res.send(result);
    });
});

app.get('/vendas',(req,res)=>{
    let SQL = 
   "SELECT * from vendas";
    db.query(SQL,( err, result)=> 
   {
    if (err) console.log(err);
        else res.send(result);
    });
});

    
app.post('/vendas',(req,res)=>{
    const{idvendas}=req.body;
    const{idproduct}=req.body;
     const{product}=req.body;
     const{marca}=req.body;
     const{qtd}=req.body;
     const{price}=req.body;
     const{total}=req.body;
 
let SQL = 
//"INSERT INTO products(product, marca, qtd, price) VALUES (borracha,mercury,10,2)";
"INSERT INTO vendas(idvendas,idproduct,product, marca, qtd, price,total) VALUES (?,?,?,?,?,?,?)";
    db.query(SQL,[idvendas,idproduct, product, marca, qtd , price, total],( err, result)=> 
 
{
 console.log(err);  
 }
 );
})

app.post('/Cad_Prods',(req,res)=>{
   const{idproduct}=req.body;
    const{product}=req.body;
    const{marca}=req.body;
    const{qtd}=req.body;
    const{price}=req.body;

let SQL = 
   
   "INSERT INTO products(idproduct,product, marca, qtd, price) VALUES (?,?,?,?,?)";
   db.query(SQL,[idproduct, product, marca, qtd , price],( err, result)=> 
   {
    console.log(err);  
    }
    );
})
 
app.post('/CadEquips',(req,res)=>{
    const{patrimonio}=req.body;
    const{equipamento}=req.body;
    const{marca}=req.body;
    const{modelo}=req.body;
    const{Nsérie}=req.body;
    const{localização}=req.body;

let SQL = 
   //"INSERT INTO equipamentos(patrimonio,equipamento, marca, modelo, Nsérie,localização) VALUES (1,ventilador,draeger,fabius,1,uti)";
   "INSERT INTO equipamentos(patrimonio,equipamento, marca, modelo, Nsérie,localização) VALUES (?,?,?,?,?,?)";
    db.query(SQL,[ product, marca, qtd , price],( err, result)=> 
   {
    console.log(err);  
    }
    );
})
app.post('/users',(req,res)=>{
    const{name}=req.body;
    const{ role }=req.body;
    const{password}=req.body;
   
let SQL = 
    "INSERT INTO users(name, role, password) VALUES (?,?,?)";
    db.query(SQL,[name,role,password],( err, result)=> 
   {
    console.log(err);  
    }
    );
})


// Route to get one post
app.get("/:id", (req,res)=>{

    const id = req.params.id;
     db.query("SELECT * FROM products WHERE id = ?", id, 
     (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });
    
    
    // Route to like a post
app.post(':id',(req,res)=>{
    
    const id = req.params.id;
    db.query("UPDATE products SET products =  products + 1 WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
    
    // Route to delete a post
    
app.delete('/:id',(req,res)=>{
    const id = req.params.id;
    
    db.query("DELETE FROM products WHERE id= ?", id, (err,result)=>{
    if(err) {
    console.log(err)
            } }) })

app.listen(3001,function(){
        console.log("Servidor Rodando");
        })
