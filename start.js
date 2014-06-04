var connect = require('connect');
var port = 1337;

connect.createServer(connect.static(__dirname + '/www')).listen(port);
console.log('Listening on ' + port + '...');