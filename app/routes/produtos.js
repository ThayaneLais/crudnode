module.exports = function (app) {
    
  app.get('/', function (req, res) {
      var db = require('../../db');
      var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
      Users.find({}).lean().exec(
          function (e, docs) {
              res.render('produtos/lista', {"userlist": docs });
          });
        });
  
  app.get('/cadastro', function (req, res) {
    res.render('produtos/form_cadastro');    
  })
}