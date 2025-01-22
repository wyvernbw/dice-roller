import { createServer } from 'http';
import { Server } from 'socket.io';
import { createServer as createViteServer } from 'vite';

async function startServer() {
	// Create Vite server
	const vite = await createViteServer({
		server: { middlewareMode: true }, // Middleware mode to integrate with custom server
	});

	// Create HTTP server
	const httpServer = createServer();

	// Attach Vite's middleware to the HTTP server
	httpServer.on('request', vite.middlewares);

	// Create Socket.IO server
	const io = new Server(httpServer);

	// Handle Socket.IO connections
	io.on('connection', socket => {
		console.log('A user connected:', socket.id);

		socket.on('message', data => {
			console.log('Message received:', data);
		});

		socket.on('disconnect', () => {
			console.log('A user disconnected:', socket.id);
		});
	});

	// Start the server
	const PORT = 3000;
	httpServer.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});
}

startServer();
