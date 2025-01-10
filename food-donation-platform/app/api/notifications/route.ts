// src/app/api/notifications/route.ts
import { NextResponse } from 'next/server';
import { io } from 'socket.io-client';

const socket = io(process.env.SOCKET_SERVER_URL || 'http://localhost:4000');

export async function POST(req: Request) {
  const data = await req.json();
  
  const { userId, message, type } = data;

  try {
    // Emit the message to the specified user via Socket.IO
    socket.emit('sendNotification', { userId, message, type });

    return NextResponse.json({ message: 'Notification sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json({ message: 'Error sending notification' }, { status: 500 });
  }
}
