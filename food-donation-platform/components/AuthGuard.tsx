// src/components/AuthGuard.tsx
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase'; // Firebase authentication

type AuthGuardProps = {
  children: ReactNode;
  allowedRoles: string[]; // Allowed roles for route access
};

const AuthGuard = ({ children, allowedRoles }: AuthGuardProps) => {
  const router = useRouter();
  
  useEffect(() => {
    const user = auth.currentUser;
    
    if (!user || !allowedRoles.includes(user?.role || '')) {
      router.push('/auth/login'); // Redirect to login if user is not allowed
    }
  }, [allowedRoles, router]);

  return <>{children}</>;
};

export default AuthGuard;
