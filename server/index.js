const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { application } = require('express');


const db = mysql.createPool({
host: "localhost",
user: "root",
password: "Prog_2022",
database: "equipamentos"
})

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    let SQL = 
    "INSERT INTO inventario(equipamento, patrimonio, marca, modelo, Nsérie, localização ) VALUES ( 'A1', '1', 'Drager', 'Fabius', '1', 'EC')";
    
   // db.query(SQL,( err, result)=> 
   {
        console.log(err);
        
    }
    //);
});
    


    app.listen(3001,function(){
        console.log("Servidor Rodando");
        })
