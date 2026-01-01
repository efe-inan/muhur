import { useState, useCallback } from 'react';
import TabNavigation from './components/TabNavigation';
import DropZone from './components/DropZone';
import PasswordInput from './components/PasswordInput';
import ProgressBar from './components/ProgressBar';
import TrustBadge from './components/TrustBadge';
import Notification from './components/Notification';
import {
    encryptFile,
    decryptFile,
    readFileAsArrayBuffer,
    arrayBufferToBlob,
    downloadBlob,
    formatFileSize
} from './utils/crypto';

function App() {
    const [activeTab, setActiveTab] = useState('encrypt'); // 'encrypt' or 'decrypt'
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [notification, setNotification] = useState(null);

    const showNotification = (type, message) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 5000);
    };

    const resetState = () => {
        setFile(null);
        setPassword('');
        setProgress(0);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        resetState();
        setNotification(null);
    };

    const handleFileSelect = useCallback((selectedFile) => {
        setFile(selectedFile);
        setProgress(0);
        setNotification(null);
    }, []);

    const handleEncrypt = async () => {
        if (!file || !password) {
            showNotification('error', 'Lütfen bir dosya seçin ve şifre girin');
            return;
        }

        if (password.length < 4) {
            showNotification('error', 'Şifre en az 4 karakter olmalı');
            return;
        }

        setIsProcessing(true);
        setProgress(0);

        try {
            const fileData = await readFileAsArrayBuffer(file);
            const encryptedData = await encryptFile(fileData, password, setProgress);

            const blob = arrayBufferToBlob(encryptedData);
            const encryptedFileName = `${file.name}.muhur`;
            downloadBlob(blob, encryptedFileName);

            showNotification('success', `"${file.name}" başarıyla şifrelendi!`);
            resetState();
        } catch (error) {
            showNotification('error', error.message || 'Şifreleme sırasında bir hata oluştu');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDecrypt = async () => {
        if (!file || !password) {
            showNotification('error', 'Lütfen bir .muhur dosyası seçin ve şifre girin');
            return;
        }

        setIsProcessing(true);
        setProgress(0);

        try {
            const encryptedData = await readFileAsArrayBuffer(file);
            const decryptedData = await decryptFile(encryptedData, password, setProgress);

            // Remove .muhur extension to get original filename
            let originalName = file.name;
            if (originalName.endsWith('.muhur')) {
                originalName = originalName.slice(0, -6);
            } else {
                originalName = `decrypted_${originalName}`;
            }

            const blob = arrayBufferToBlob(decryptedData);
            downloadBlob(blob, originalName);

            showNotification('success', `"${originalName}" başarıyla çözüldü!`);
            resetState();
        } catch (error) {
            showNotification('error', error.message || 'Dosya çözülürken bir hata oluştu');
        } finally {
            setIsProcessing(false);
        }
    };

    const isEncryptMode = activeTab === 'encrypt';

    return (
        <div className="min-h-screen bg-cyber-darker bg-gradient-mesh">
            {/* Notification */}
            <Notification notification={notification} onClose={() => setNotification(null)} />

            {/* Main Container */}
            <div className="container mx-auto px-4 py-8 max-w-2xl min-h-screen flex flex-col">
                {/* Header */}
                <header className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <ShieldIcon className="w-10 h-10 text-cyber-accent shield-pulse" />
                        <h1 className="text-4xl md:text-5xl font-bold font-mono-display text-white tracking-wider">
                            MÜHÜR
                        </h1>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base">
                        Askeri Düzey Dosya Şifreleme • AES-256-GCM
                    </p>
                </header>

                {/* Tab Navigation */}
                <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

                {/* Main Content Card */}
                <div className="flex-grow flex flex-col">
                    <div className="bg-cyber-slate/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 md:p-8 glow-border">
                        {/* Drop Zone */}
                        <DropZone
                            onFileSelect={handleFileSelect}
                            file={file}
                            accept={isEncryptMode ? '*' : '.muhur'}
                            disabled={isProcessing}
                        />

                        {/* File Info */}
                        {file && (
                            <div className="mt-4 p-4 bg-cyber-dark/50 rounded-lg border border-gray-700 animate-fade-in">
                                <div className="flex items-center gap-3">
                                    <FileIcon className="w-5 h-5 text-cyber-accent" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-medium truncate">{file.name}</p>
                                        <p className="text-gray-400 text-sm">{formatFileSize(file.size)}</p>
                                    </div>
                                    {!isProcessing && (
                                        <button
                                            onClick={() => setFile(null)}
                                            className="text-gray-400 hover:text-red-400 transition-colors p-1"
                                            aria-label="Dosyayı kaldır"
                                        >
                                            <XIcon className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Password Input */}
                        <div className="mt-6">
                            <PasswordInput
                                value={password}
                                onChange={setPassword}
                                placeholder={isEncryptMode ? "Güçlü bir şifre girin..." : "Şifrenizi girin..."}
                                disabled={isProcessing}
                            />
                        </div>

                        {/* Progress Bar */}
                        {isProcessing && (
                            <div className="mt-6 animate-fade-in">
                                <ProgressBar progress={progress} />
                                <p className="text-center text-gray-400 text-sm mt-2">
                                    {isEncryptMode ? 'Şifreleniyor...' : 'Çözülüyor...'} {Math.round(progress)}%
                                </p>
                            </div>
                        )}

                        {/* Action Button */}
                        <button
                            onClick={isEncryptMode ? handleEncrypt : handleDecrypt}
                            disabled={isProcessing || !file || !password}
                            className={`
                w-full mt-6 py-4 px-6 rounded-xl font-semibold text-lg
                transition-all duration-300 btn-cyber
                ${isProcessing || !file || !password
                                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-cyber-accent to-cyber-accent-dim text-cyber-dark hover:shadow-lg'
                                }
              `}
                        >
                            {isProcessing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <LoadingSpinner />
                                    {isEncryptMode ? 'Şifreleniyor...' : 'Çözülüyor...'}
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    {isEncryptMode ? <LockIcon className="w-5 h-5" /> : <UnlockIcon className="w-5 h-5" />}
                                    {isEncryptMode ? 'KİLİTLE' : 'AÇ'}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Security Info */}
                    <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
                        <div>
                            <p className="font-mono-display text-cyber-accent">AES-256</p>
                            <p>Şifreleme</p>
                        </div>
                        <div>
                            <p className="font-mono-display text-cyber-accent">PBKDF2</p>
                            <p>150K İterasyon</p>
                        </div>
                        <div>
                            <p className="font-mono-display text-cyber-accent">GCM</p>
                            <p>Bütünlük</p>
                        </div>
                    </div>
                </div>

                {/* Trust Badge */}
                <TrustBadge />
            </div>
        </div>
    );
}

// Icon Components
function ShieldIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    );
}

function LockIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

function UnlockIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

function FileIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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

function LoadingSpinner() {
    return (
        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );
}

export default App;
