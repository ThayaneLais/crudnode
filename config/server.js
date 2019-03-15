
module.exports = function() {
    const app = require('express')();
    const load = require('express-load');

    //seta variáveis para utilizar o ejs e onde o express deve buscar as views
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //carrega as rotas dentro de app
    load('routes', {cwd: 'app'})
    .into(app);
    
    return app;
}
