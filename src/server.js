const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000;

const messages = [];
const users = [];

// const addUser = ({id}) => { console.log('hello'); return  }

const initSocket = (socket) => {
	console.log('a user connected');
	socket.on('login', (userType) => { console.log(users);});
};

io.on('connection', initSocket);

http.listen(port, err => {
	if (err) console.log('something bad happened', err);
	console.log(`server is listening on port ${port}`);
});
