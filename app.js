/** importar as configurações do servidor */
var app = require('./config/server.js');

var server = app.listen(82, function () {
  console.log("Servidor On");
});

var io = require('socket.io')(server);

/** Definido variável de escopo Global*/
app.set('io', io);

io.on("connection", function (socket) {

  console.log('Usuário Conectou!!!');

  socket.on("disconnect", function () {
    console.log('Usuario desconectou!!!');
  });

  socket.on("msgParaServidor", function (data) {
    /** Dialogo */
    socket.emit(
      'msgParaCliente',
      { apelido: data.apelido, mensagem: data.mensagem }
    );
    socket.broadcast.emit(
      'msgParaCliente',
      { apelido: data.apelido, mensagem: data.mensagem }
    );

    /** participantes */
    if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
      socket.emit(
        'participantesParaCliente',
        { apelido: data.apelido }
      );
      socket.broadcast.emit(
        'participantesParaCliente',
        { apelido: data.apelido }
      );
    }
  });

  // eventos de escute 
  // eventos de emissão
}); 