// src/components/Notification.tsx
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Notification = () => {
  const [message, setMessage] = useState('');
  const socket = io('http://localhost:4000'); // Adjust based on your Socket.IO server

  useEffect(() => {
    socket.on('newNotification', (msg: string) => {
      setMessage(msg);
    });
    
    return () => {
      socket.off('newNotification');
    };
  }, [socket]);

  return (
    message ? (
      <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-md">
        {message}
      </div>
    ) : null
  );
};

export default Notification;
