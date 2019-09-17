const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000;

const messages = [];
const users = [];

io.on('connection', socket => console.log('a user connected', socket));

http.listen(port, err => {
	if (err) console.log('something bad happened', err);
	console.log(`server is listening on port ${port}`);
});
