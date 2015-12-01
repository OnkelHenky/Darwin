/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 20.02.13
 */

exports.startTheMagic = function(io){

   //var io = require("socket.io").listen(withServer);

    io.sockets.on('connection', function (socket) {

        console.log('On Connection');

        socket.on('pushUIUpdate', function(data){
        console.log('++++++++++++++++++++++++++++++++++');
        console.log('Emitting new settings update to the clients.');
        console.dir(data);
        console.log('++++++++++++++++++++++++++++++++++');
      //  socket.broadcast.emit('settings_update', data);
        socket.broadcast.emit('gpii_update', data);
    });
  });
};