const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Relacionamento entre tabelas (Sequelize)

Category.hasMany(Article);   // (1-n): Uma categoria percente a muitos artigos
Article.belongsTo(Category); // (1-1): Um artigo pertence a uma categoria

//Article.sync({ force: true }); // Recria a tabela, necessário excluir depois de criado

module.exports = Article;