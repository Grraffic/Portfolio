import { useState, useCallback } from 'react';

type ToastType = 'success' | 'error';

interface Toast {
  message: string;
  type: ToastType;
}

/**
 * useToast
 * Shows a temporary toast notification that auto-dismisses after `duration` ms.
 */
const useToast = (duration = 3000) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  }, [duration]);

  const clearToast = () => setToast(null);

  return { toast, showToast, clearToast };
};

export default useToast;
