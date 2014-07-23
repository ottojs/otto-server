
'use strict';

// Modules
var http = require('http');

// Exports
module.exports = function (app) {

  // HTTP Server
  var server = http.createServer(app).listen(app.get('port'), function () {

    // Information
    console.log('---');
    console.log('HTTP Server Started');
    console.log('Mode:', app.get('env'));
    console.log('Port:', app.get('port'));

    // WebSockets
    if (app.socketio) {
      app.socketio.serveClient(false);
      app.socketio.attach(server);
      console.log('---');
      console.log('WebSocket Server Started...');
    }

  });

});
