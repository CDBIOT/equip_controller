
const mongoose = require('mongoose')
const db_atlas = require('./db_atlas')
//Configuração do mongoose
"mongodb+srv://cdb:abcdeF12345@cluster0.mvho6.mongodb.net/test"
mongoose.connect(MONGODB_URI).then(() => {
    console.log("MongodB temps conectado com sucesso!")

})
.catch((err) => {
    console.log("Houve um erro ao se conectar ao mongodB temps: "+err)
})

//Model Temperaturas Dia Mes Ano

const Temps = mongoose.model('Temps',{
    //_id: Number,
    local: String  ,
    temperatura: Number,
    dia: Number,
    mes: Number,
    ano: Number
})

module.exports = Temps

