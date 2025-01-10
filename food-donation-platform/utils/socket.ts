// src/utils/socket.ts
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Adjust this URL as necessary

// Emit notification
export const emitNotification = (message: string) => {
  socket.emit('newNotification', message);
};

// Listen for notifications
export const listenForNotifications = (callback: (msg: string) => void) => {
  socket.on('newNotification', callback);
};

// Disconnect the socket connection
export const disconnectSocket = () => {
  socket.disconnect();
};

export default socket;
