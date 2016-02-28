/**
 * Created by Artem M.
 * Date: 27.02.16
 * Email: frost.artem@gmail.com
 */

var express = require('express');
var socket = require('socket.io');

var app = express();

app.set('views', __dirname+'/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.use(express.static(__dirname+'/script'));

var io = socket.listen(app.listen(8080));


app.get('/', function(req, res){
    res.render('home');
    res.end();
});

io.sockets.on('connection', function(client){


    client.emit('answer', {'data': 'Welcome to our chat'});

    client.on('message', function(data){
        console.log(data.send);
        io.sockets.emit('answer', {'data': data.send});
    });


});