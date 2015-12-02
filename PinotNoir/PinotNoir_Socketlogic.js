/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 20.02.13
 */

exports.startTheMagic = function(io){

    io.sockets.on('connection', function (socket) {

        console.log('On Connection');

        socket.on('pushUIUpdate', function(data){
        console.log('++++++++++++++++++++++++++++++++++');
        console.log('Emitting new settings update to the clients.');
        console.dir(data);
        console.log('++++++++++++++++++++++++++++++++++');

            var _jf   = require('jsonfile'),
                _path = require('path'),
                _persona_name = data.selected_persona,
                _path_to_pref_set =  _path.join(__dirname, 'Preferences',_persona_name+".json");

                console.log('path to prefernce set = '+ _path_to_pref_set);

                var _jsonData = _jf.readFileSync(_path_to_pref_set);

                console.dir(_jsonData.flat.contexts['gpii-default'].preferences['http://registry.gpii.net/common/contentRep']);

               var _descrTyp = _jsonData.flat.contexts['gpii-default'].preferences;


            socket.broadcast.emit('gpii_update', _descrTyp);
    });
  });
};