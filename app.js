/** importar as configurações do servidor */
//var app = require('./config/server.js');
var app = require('./config/server.js');

//var rotaHome = require('./app/routes/index')(app);

/** parametrizar a porta de escuta 
app.listen(8080, function () {
  console.log("Servidor online");
});*/

app.listen(82, function () {
  console.log("Servidor On");
}); 