// *********************************************************************************************************
// UNIV CRUZEIRO DO SUL - CAMPUS SANTO AMARO - CURSO ADS
// Disciplina: Top. Avançados de Sistema de Informação - I
// Autor: Ana Paula de Oliveira Silva   -   08/05/2024
// --------------------------------------------------------------------
// Sistema de uma pizzaria com o framework express tendo a pagina principal apresentação da pizzaria e um
// botão no qual chama o cardapio. O cliente seleciona as opções de pizza e ao clicar montar pizza, abre um 
//  novo site (em web server), apresentando o pedido completo. 
// *********************************************************************************************************

// Importação dos modulos:
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();

// Criar as rotas / serviços:
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/appPizzaria.js', (req, res) => {
    fs.readFile(path.join(__dirname, 'appPizzaria.js'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/javascript').send(data);
        }
    })
})

app.get('/pedido', (req, res) => {
    fs.readFile(path.join(__dirname, 'pedido.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

// Configuração do Servidor:
const PORT = 4500;
app.listen(PORT, () =>{
    console.log(`[OK] - Servidor executando em: 'http://localhost:${PORT}/`);
});
