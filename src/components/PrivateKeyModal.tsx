'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivateKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (privateKey: string) => Promise<void>;
  email: string;
  error?: string;
  isLoading?: boolean;
  retryCount?: number;
  maxRetries?: number;
}

export default function PrivateKeyModal({
  isOpen,
  onClose,
  onSubmit,
  email,
  error,
  isLoading = false,
  retryCount = 0,
  maxRetries = 3,
}: PrivateKeyModalProps) {
  const [privateKey, setPrivateKey] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (privateKey.trim()) {
      await onSubmit(privateKey.trim());
    }
  };

  const isDisabled = retryCount >= maxRetries;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#14213d] text-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Verify Private Key</h2>

            <p className="text-sm text-gray-300 mb-4 text-center">
              Your private key is essential for account security. Keep it safe and never share it.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Private Key for {email}</label>
                <textarea
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  placeholder="Paste your private key here..."
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  rows={4}
                  disabled={isDisabled || isLoading}
                  required
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-600/20 border border-red-600 rounded text-red-400 text-sm">
                  {error}
                  {retryCount > 0 && (
                    <div className="mt-1">Attempts remaining: {maxRetries - retryCount}</div>
                  )}
                </div>
              )}

              {isDisabled && (
                <div className="mb-4 p-3 bg-yellow-600/20 border border-yellow-600 rounded text-yellow-400 text-sm">
                  Maximum retry attempts reached. Please contact support for assistance.
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded font-semibold transition-all"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isDisabled || isLoading || !privateKey.trim()}
                  className={`flex-1 py-3 rounded font-semibold transition-all ${
                    isDisabled || isLoading || !privateKey.trim()
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? 'Verifying...' : 'Verify'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
