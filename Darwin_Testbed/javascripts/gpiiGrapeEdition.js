/**
 * Created by WebStorm.
 * User: Henka
 * Date: 19.02.14
 */

 /* connect to the PCP, using JSONP */
(function() {

    var socketIOScriptTag = document.createElement("script");
    socketIOScriptTag.type = "text/javascript";
    socketIOScriptTag.onload = function () {
        console.log('socket.io.js loaded!');
        var clientSocketScriptTag = document.createElement("script");
            clientSocketScriptTag.type = "text/javascript";
            clientSocketScriptTag.src = "http://localhost:3030/javascripts/clientSocket.js";
            clientSocketScriptTag.onload =  function () {
            console.log('clientSocket.js loaded!');
            };
        $("head").append(clientSocketScriptTag);
    };
    document.getElementsByTagName('head')[0].appendChild(socketIOScriptTag);
    socketIOScriptTag.src = "http://localhost:3030/socket.io/socket.io.js";

})();