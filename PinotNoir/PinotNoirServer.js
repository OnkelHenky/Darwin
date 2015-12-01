/**
 * Created by alex on 03.06.15.
 */

/**
 * Module dependencies.
 */

var express = require('express')

    , cors = require('cors')
    , socketLogic = require('./PinotNoir_Socketlogic.js')
    , path = require('path');


var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var proxy = require('express-http-proxy');
var http = require("http");

var app = express();
var server = require('http').Server(app);
var io = require("socket.io").listen(server);

app.set('port', process.env.PORT || 3030);
app.set('views', __dirname + '/views');
//app.use(favicon());
app.use(logger('dev'));

app.use(cors());                                           /* Reference to 'cors', Cross-Origin Resource Sharing */
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));  /* Reference to the static resources, located in the 'public' folder.*/
app.use(errorHandler());

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}


server.listen(app.get('port'), function(){
    console.log("Pinot 4 Grapes Server at: http://127.0.0.1 listening on port " + app.get('port'));
});

/* Starting the WebSocket magic */
socketLogic.startTheMagic(io);

