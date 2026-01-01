import { useState, useCallback } from 'react';

function DropZone({ onFileSelect, file, accept = '*', disabled = false }) {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        if (!disabled) {
            setIsDragOver(true);
        }
    }, [disabled]);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragOver(false);

        if (disabled) return;

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            onFileSelect(droppedFile);
        }
    }, [disabled, onFileSelect]);

    const handleFileInput = useCallback((e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            onFileSelect(selectedFile);
        }
    }, [onFileSelect]);

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
        drop-zone relative rounded-xl border-2 border-dashed p-8 md:p-12
        text-center cursor-pointer transition-all duration-300
        ${isDragOver
                    ? 'drag-over border-cyber-accent bg-cyber-accent/10'
                    : 'border-gray-600 hover:border-gray-500 bg-cyber-dark/30'
                }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${file ? 'border-cyber-accent/50' : ''}
      `}
        >
            <input
                type="file"
                onChange={handleFileInput}
                accept={accept}
                disabled={disabled}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
            />

            <div className="pointer-events-none">
                {/* Upload Icon */}
                <div className={`
          mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4
          ${isDragOver
                        ? 'bg-cyber-accent/20 text-cyber-accent'
                        : 'bg-gray-800 text-gray-400'
                    }
          transition-all duration-300
        `}>
                    {isDragOver ? (
                        <DownloadIcon className="w-8 h-8 animate-bounce" />
                    ) : (
                        <UploadIcon className="w-8 h-8" />
                    )}
                </div>

                {/* Text */}
                <p className={`
          text-lg font-medium mb-2 transition-colors duration-300
          ${isDragOver ? 'text-cyber-accent' : 'text-white'}
        `}>
                    {isDragOver ? 'Dosyayı bırakın' : 'Dosya sürükleyin veya tıklayın'}
                </p>
                <p className="text-sm text-gray-500">
                    {accept === '.muhur'
                        ? 'Yalnızca .muhur dosyaları'
                        : 'Her türlü dosya desteklenir'
                    }
                </p>
            </div>

            {/* Animated border when dragging */}
            {isDragOver && (
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 border-2 border-cyber-accent rounded-xl animate-pulse" />
                </div>
            )}
        </div>
    );
}

function UploadIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
    );
}

function DownloadIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    );
}

export default DropZone;
