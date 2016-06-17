/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 20.02.13
 */

exports.startTheMagic = function(io){

    function connectToGPIIPrefServer(io){

        var socketServer = 'http://localhost:8081/browserChannel';

        var io = require('socket.io-client');
        var socket = io.connect(socketServer, {reconnect: true});
        var solutionId = "my.DARWIN_example.com"; /* Just a simple identifier. A better one has to be defined later. */

        socket.on("connect", function (data) {
            console.log("OnConnection");
            socket.send(solutionId);
        });

        socket.on("gpii_update", function (data) {
            console.log("getting a GPII (settings) update"+data);
            console.dir(data);
            port.postMessage({settings: data});
        });

        socket.on("connectionSucceeded", function (settings) {
            console.log("## on connectionSucceeded - got: " + JSON.stringify(settings));
            allSettings[solutionId] = settings;
            port.postMessage({settings: settings});
        });

        socket.on("onBrowserSettingsChanged", function (settings) {
            console.log("onBrowserSettingsChanged: " + JSON.stringify(settings));
            allSettings[solutionId] = settings;
            port.postMessage({settings: settings});
        });

        socket.on("disconnect", function (request) {
            // We can tell the website what's going on
            console.log("## on disconnect: " + request);
        });

        socket.on("error", function (err) {
            // We can tell the website what's going on
            console.log("## on error: " + err);
        });

        /*
        port.onDisconnect.addListener(function () {
            console.log("## port has been closed - closing socket");
            socket.disconnect();
        }); */
    }

    connectToGPIIPrefServer(io);

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