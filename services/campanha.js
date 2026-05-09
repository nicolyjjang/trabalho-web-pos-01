const fs = require("fs")

const caminhoArquivo = "./assets/campanha.json";

function getTodasCampanhas(){
    return JSON.parse(fs.readFileSync(caminhoArquivo))
}
function getCampanhaPorId(id){
    const campanhas =JSON.parse(fs.readFileSync(caminhoArquivo))
    const campanhaFiltrado = campanhas.filter(campanha => campanha.id === id)[0]
    return campanhaFiltrado
}
function insereCampanha(campanhaNovo){
    const campanhas = JSON.parse(fs.readFileSync(caminhoArquivo));

    const novaListaDeCampanha = [...campanhas, campanhaNovo]
}
function modificaCampanha(modificacoes, id){
    let campanhasAtuais =JSON.parse(fs.readFileSync(caminhoArquivo))
    const indiciModificado = campanhasAtuais.findIndex(campanha => campanha.id ===id)

    const conteudoMudado = {...campanhasAtuais[indiciModificado], ...modificacoes}

    campanhasAtuais[indiciModificado] = conteudoMudado;

    fs.writeFileSync(caminhoArquivo, JSON.stringify(campanhasAtuais))
}
function deletarCampanhaPorId(id){
    const campanhas = JSON.parse(fs.readFileSync(caminhoArquivo));
    const campanhaFiltrado = campanhas.filter( campanha => campanha.id !== id );
    fs.writeFileSync(caminhoArquivo, JSON.stringify(campanhaFiltrado))
}

module.exports = {
    getTodasCampanhas,
    getCampanhaPorId,
    insereCampanha,
    modificaCampanha,
    deletarCampanhaPorId
}