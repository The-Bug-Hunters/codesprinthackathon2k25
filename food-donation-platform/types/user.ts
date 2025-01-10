// src/types/user.ts

// Enum for user roles
export enum UserRole {
    DONOR = 'donor',
    FOOD_BANK = 'food_bank',
    DELIVERY_DRIVER = 'delivery_driver',
    ADMIN = 'admin',
  }
  
  // Type for the User object
  export interface User {
    id: string;         // User's unique ID (e.g., Firebase UID)
    email: string;      // User's email address
    name: string;       // User's name
    role: UserRole;     // User's role (donor, food bank, driver, admin)
    photoURL?: string;  // Optional URL for user profile picture
    phoneNumber?: string;  // Optional phone number for the user
    address?: string;      // Optional address for the user (donor/food bank)
    language?: string;     // User's preferred language
    createdAt: Date;       // Account creation date
  }
  
  // Type for the response from the backend when creating or fetching user profiles
  export interface UserProfileResponse {
    success: boolean;
    user: User;
  }
  
  // Type for user authentication
  export interface AuthUser {
    uid: string;       // Firebase user ID
    email: string;     // Email associated with the Firebase account
    displayName: string;  // Display name
    photoURL?: string;   // Profile picture URL (optional)
  }
  