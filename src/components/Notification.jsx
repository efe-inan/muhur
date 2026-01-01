import { useEffect } from 'react';

function Notification({ notification, onClose }) {
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification, onClose]);

    if (!notification) return null;

    const isError = notification.type === 'error';

    return (
        <div className="fixed top-4 right-4 z-50 notification-enter">
            <div className={`
        flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl
        border backdrop-blur-sm max-w-sm
        ${isError
                    ? 'bg-red-900/80 border-red-700 text-red-100'
                    : 'bg-cyber-dark/90 border-cyber-accent/50 text-white'
                }
      `}>
                {/* Icon */}
                <div className={`
          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${isError ? 'bg-red-800' : 'bg-cyber-accent/20'}
        `}>
                    {isError ? (
                        <XCircleIcon className="w-5 h-5 text-red-400" />
                    ) : (
                        <CheckCircleIcon className="w-5 h-5 text-cyber-accent" />
                    )}
                </div>

                {/* Message */}
                <p className="flex-1 text-sm font-medium">{notification.message}</p>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className={`
            flex-shrink-0 p-1 rounded-full transition-colors
            ${isError
                            ? 'hover:bg-red-800 text-red-300'
                            : 'hover:bg-gray-700 text-gray-400'
                        }
          `}
                    aria-label="Kapat"
                >
                    <XIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function CheckCircleIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function XCircleIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function XIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

export default Notification;
