'use client';

import { useToast } from '@/contexts/ToastContext';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center gap-3 rounded-button px-4 py-3 shadow-card transition-all ${
            toast.type === 'error'
              ? 'bg-red-600 text-white'
              : toast.type === 'success'
                ? 'bg-green-600 text-white'
                : 'bg-primary-600 text-white'
          }`}
          role="alert"
        >
          <span className="flex-1">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/80 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
