const conexao = require("./conexao");

const getAll = () =>{
    const task = conexao.execute();
};
module.exports = {
    getAll
};