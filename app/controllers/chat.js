module.exports.iniciaChat = function (application, req, res) {
  var dadosForm = req.body;
  //console.log(dadosForm);
  req.assert('apelido', 'Nome ou Apelido é obrigatório!').notEmpty();
  req.assert('apelido', 'Nome ou Apelido deve conter entre 3 a 15 caracteres.').len(3, 15);

  var erros = req.validationErrors();

  if (erros) {
    //console.log(erros);
    //res.send('Existem erros no formulário');
    res.render("index", { validacao: erros });
    return;
  }

  res.render('chat.ejs');
}