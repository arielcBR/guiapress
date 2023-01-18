const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');
const app = express();

// Carregando rotas
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

// View engine
app.set('view engine', 'ejs');

// Static
app.set(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão ao BD feita com sucesso!");
    })
    .catch((error) => {
        console.log("Conexão ao BD falhou, erro: " + error);
    });
    
// Models

const Article = require('./articles/Article');
const Category = require('./categories/Category');

// Middlewares

app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req, res) => {
    res.render("index");
});

// Levantando servidor

app.listen(8080, () => {
    console.log("O servidor esta online!");
})