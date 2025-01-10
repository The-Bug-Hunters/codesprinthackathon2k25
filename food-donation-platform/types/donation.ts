// src/types/donation.ts

// Enum for donation status
export enum DonationStatus {
    PENDING = 'pending',
    PICKED_UP = 'picked_up',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
  }
  
  // Type for the Donation object
  export interface Donation {
    id: string;
    donorId: string;  // User ID of the donor
    foodType: string; // Type of food (e.g., fruits, vegetables, packaged food)
    quantity: number; // Quantity in kilograms or units
    pickupLocation: {
      lat: number;    // Latitude
      lon: number;    // Longitude
    };
    deliveryLocation: {
      lat: number;    // Latitude
      lon: number;    // Longitude
    };
    status: DonationStatus;  // Status of the donation (pending, picked_up, etc.)
    donationDate: Date;      // Date when the donation was made
    proofOfDonationUrl?: string;  // Optional proof of donation (e.g., photo or receipt)
  }
  
  // Type for the response from the backend when creating or fetching donations
  export interface DonationResponse {
    success: boolean;
    donation: Donation;
  }
  
  // Type for a history of donations, typically returned as an array
  export type DonationHistory = Donation[];
  