/**
 * Hook to manage private key auth flows
 * Usage in components for handling sign-in with private key verification
 */

import { useState, useCallback } from "react";

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  userId?: number;
  email?: string;
}

export function usePrivateKeyAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const verifyCredentials = useCallback(
    async (email: string, password: string): Promise<{
      success: boolean;
      userId?: number;
      newUser?: boolean;
      privateKey?: string;
      message?: string;
    }> => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch("/api/auth/verifyCredentials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.toLowerCase(),
            password,
          }),
        });

        const data = await response.json();

        if (!data.success) {
          setError(data.message || "Credential verification failed");
          return { success: false, message: data.message };
        }

        return {
          success: true,
          userId: data.userId,
          newUser: data.newUser,
          privateKey: data.privateKey,
        };
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMsg);
        return { success: false, message: errorMsg };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const verifyPrivateKey = useCallback(
    async (userId: number, privateKey: string): Promise<{
      success: boolean;
      token?: string;
      message?: string;
    }> => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch("/api/auth/verifyPrivateKey", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            privateKey: privateKey.trim(),
          }),
        });

        let data;
        try {
          data = await response.json();
        } catch (parseError) {
          console.error('verifyPrivateKey returned invalid JSON:', parseError);
          setError("Server error");
          return { success: false, message: "Server error" };
        }

        if (!data.success) {
          setError(data.message || "Private key verification failed");
          return { success: false, message: data.message };
        }

        // Store token
        if (data.token) {
          localStorage.setItem("accessToken", data.token);
          localStorage.setItem("user_email", data.user?.email || "");
        }

        return {
          success: true,
          token: data.token,
        };
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMsg);
        return { success: false, message: errorMsg };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() => setError(""), []);

  return {
    isLoading,
    error,
    clearError,
    verifyCredentials,
    verifyPrivateKey,
  };
}
