/** importar modulo do framework express */
var express = require('express');

/** importar modulo do consign */
var consign = require('consign');

/** importar modulo body-parser */
var bodyParser = require('body-parser');

/**importar modulo do express-validate */
var expressValidator = require('express-validator');

/** iniciar o objeto do express*/
var app = express();

/** configurar as variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/** configurar o middleware express.static */
app.use(express.static('./app/public'));

/** configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/** configurar o middleware expressValidator */
app.use(expressValidator());

/** configurar autoload do consign para objeto app   */
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into.app;

/** exportar o objeto app */
module.exports = app;