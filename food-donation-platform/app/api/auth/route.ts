// src/app/api/auth/route.ts
import { NextResponse } from 'next/server';
import { auth } from '../../../lib/firebase'; // Import Firebase Authentication service

// Register a new user
export async function POST(req: Request) {
  const data = await req.json();
  
  const { email, password } = data;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    
    // Returning user data (excluding password)
    return NextResponse.json({ user: { uid: userCredential.user.uid, email: userCredential.user.email } }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}

// Login a user
export async function POST(req: Request) {
  const data = await req.json();

  const { email, password } = data;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    
    return NextResponse.json({ user: { uid: userCredential.user.uid, email: userCredential.user.email } }, { status: 200 });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ message: 'Error logging in' }, { status: 500 });
  }
}
