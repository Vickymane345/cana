"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface AdminAuthProps {
  children: React.ReactNode;
}

export default function AdminAuth({ children }: AdminAuthProps): React.ReactElement {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("key");
    const expectedToken = process.env.NEXT_PUBLIC_ADMIN_SECRET;

    // If no secret is configured at all, show error
    if (!expectedToken) {
      setError("Admin secret not configured. Please set NEXT_PUBLIC_ADMIN_SECRET in .env file.");
      setIsLoading(false);
      return;
    }

    // If no token in URL, redirect to home
    if (!token) {
      router.push("/");
      return;
    }

    // Check if token matches
    if (token !== expectedToken) {
      router.push("/");
      return;
    }

    setIsAuthorized(true);
    setIsLoading(false);
  }, [searchParams, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Verifying access...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-red-900 border border-red-700 text-red-200 px-6 py-4 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Configuration Error</h2>
          <p>{error}</p>
          <p className="mt-4 text-sm">
            Add to your .env file:<br/>
            <code className="bg-gray-800 px-2 py-1 rounded">NEXT_PUBLIC_ADMIN_SECRET=your_secure_key_here</code>
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return <></>;
  }

  return <>{children}</>;
}
