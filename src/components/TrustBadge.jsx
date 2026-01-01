function TrustBadge() {
    return (
        <footer className="mt-8 pb-4">
            {/* Privacy Badge */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-cyber-dark/30 border border-gray-800">
                <div className="flex items-center gap-2 text-cyber-accent">
                    <ShieldCheckIcon className="w-6 h-6 shield-pulse" />
                    <span className="font-semibold font-mono-display">%100 GİZLİ</span>
                </div>

                <p className="text-center text-sm text-gray-400 max-w-md">
                    Bu işlem <span className="text-white font-medium">%100 tarayıcınızda</span> gerçekleşir.
                    Hiçbir veri sunucuya gönderilmez.
                    <span className="text-cyber-accent"> İnternet bağlantınızı keserek test edebilirsiniz.</span>
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                        <ServerOffIcon className="w-4 h-4" />
                        Sunucu Yok
                    </span>
                    <span className="flex items-center gap-1">
                        <DatabaseOffIcon className="w-4 h-4" />
                        Kayıt Yok
                    </span>
                    <span className="flex items-center gap-1">
                        <LockClosedIcon className="w-4 h-4" />
                        Uçtan Uca
                    </span>
                </div>
            </div>

            {/* Security Details */}
            <div className="mt-4 p-4 rounded-xl bg-cyber-dark/20 border border-gray-800/50">
                <h3 className="text-center text-sm font-semibold text-gray-300 mb-3 flex items-center justify-center gap-2">
                    <KeyIcon className="w-4 h-4 text-cyber-accent" />
                    Güvenlik Detayları
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-cyber-dark/40 rounded-lg p-3 border border-gray-700/50">
                        <p className="text-cyber-accent font-mono-display font-semibold">AES-256-GCM</p>
                        <p className="text-gray-500 mt-1">Askeri düzey şifreleme algoritması. NSA tarafından gizli bilgiler için onaylı.</p>
                    </div>
                    <div className="bg-cyber-dark/40 rounded-lg p-3 border border-gray-700/50">
                        <p className="text-cyber-accent font-mono-display font-semibold">PBKDF2-SHA256</p>
                        <p className="text-gray-500 mt-1">150.000 iterasyon ile brute-force saldırılara karşı koruma.</p>
                    </div>
                    <div className="bg-cyber-dark/40 rounded-lg p-3 border border-gray-700/50">
                        <p className="text-cyber-accent font-mono-display font-semibold">Benzersiz IV & Salt</p>
                        <p className="text-gray-500 mt-1">Her dosya için rastgele oluşturulan değerler ile maksimum güvenlik.</p>
                    </div>
                    <div className="bg-cyber-dark/40 rounded-lg p-3 border border-gray-700/50">
                        <p className="text-cyber-accent font-mono-display font-semibold">Web Crypto API</p>
                        <p className="text-gray-500 mt-1">Tarayıcının yerleşik kriptografi motoru. JavaScript değil, native kod.</p>
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        Telemetri yok
                    </span>
                    <span className="flex items-center gap-1">
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        Analytics yok
                    </span>
                    <span className="flex items-center gap-1">
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        Çerez yok
                    </span>
                </div>
            </div>

            {/* Open Source Badge */}
            <div className="mt-4 flex items-center justify-center">
                <a
                    href="https://github.com/efe-inan/muhur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-dark/30 border border-gray-700 hover:border-cyber-accent/50 transition-all duration-300 group"
                >
                    <GitHubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Açık Kaynak</span>
                    <span className="text-xs text-cyber-accent font-mono-display">• Kaynak Kodu İncele</span>
                </a>
            </div>

            {/* Developer Footer */}
            <div className="mt-6 pt-4 border-t border-gray-800/50">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-400">
                        <span className="text-gray-500">Tasarım & Geliştirme:</span>{" "}
                        <a
                            href="https://github.com/efe-inan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-cyber-accent transition-colors"
                        >
                            Efe İnan
                        </a>
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/efe-inan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyber-accent transition-colors"
                        >
                            <GitHubIcon className="w-4 h-4" />
                            @efe-inan
                        </a>
                    </div>
                </div>
                <p className="text-center text-xs text-gray-600 mt-3">
                    MÜHÜR © 2026 • Güvenli Dosya Şifreleme
                </p>
            </div>
        </footer>
    );
}

function ShieldCheckIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    );
}

function ServerOffIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
        </svg>
    );
}

function DatabaseOffIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
        </svg>
    );
}

function LockClosedIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

function KeyIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
    );
}

function CheckCircleIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function GitHubIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

export default TrustBadge;
