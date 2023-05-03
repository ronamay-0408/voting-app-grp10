var express = require("express")
var app = express();

const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const PORT = process.end.PORT || 8000;

const defURL = "https://voting-app-grp10.onrender.com"

app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/vote", function(req, res){
res.render("pages/vote", {socketURL:defURL});
});
app.get("/result", function(req, res){
res.render("pages/result", {socketURL:defURL});
});

io.sockets.on('connection', function(socket){
	socket.on('vote_A', function(vote){
		io.emit('vote_A', vote);
	});

	socket.on('vote_B', function(vote){
		io.emit('vote_B', vote);
	});

	socket.on('vote_C', function(vote){
	io.emit('vote_C', vote);
	});

	socket.on('vote_D', function(vote){
		io.emit('vote_D', vote);
	});

	socket.on('vote_E', function(vote){
		io.emit('vote_E', vote);
	});

	socket.on('vote_F', function(vote){
		io.emit('vote_F', vote);
	});
});

server.listen(8000);
console.log("server is listening on port: 8000");


