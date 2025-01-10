// src/app/api/donations/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase'; // Import Firebase DB service (use Firebase SDK)

export async function POST(req: Request) {
  const data = await req.json();
  
  const { donorId, foodType, quantity, location } = data;
  
  try {
    // Create a new donation in Firebase Firestore
    const donationRef = db.collection('donations').doc();
    await donationRef.set({
      donorId,
      foodType,
      quantity,
      location,
      status: 'pending', // Status could be pending, completed, or in-progress
      createdAt: new Date(),
    });
    
    return NextResponse.json({ message: 'Donation created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating donation:', error);
    return NextResponse.json({ message: 'Error creating donation' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { donorId } = req.url.searchParams;
  
  try {
    // Fetch donations by donorId from Firestore
    const snapshot = await db.collection('donations').where('donorId', '==', donorId).get();
    
    if (snapshot.empty) {
      return NextResponse.json({ message: 'No donations found' }, { status: 404 });
    }
    
    const donations = snapshot.docs.map(doc => doc.data());
    
    return NextResponse.json(donations, { status: 200 });
  } catch (error) {
    console.error('Error fetching donations:', error);
    return NextResponse.json({ message: 'Error fetching donations' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const data = await req.json();
  const { donationId, status } = data;

  try {
    // Update the donation status
    const donationRef = db.collection('donations').doc(donationId);
    await donationRef.update({ status });

    return NextResponse.json({ message: 'Donation status updated' }, { status: 200 });
  } catch (error) {
    console.error('Error updating donation:', error);
    return NextResponse.json({ message: 'Error updating donation' }, { status: 500 });
  }
}
