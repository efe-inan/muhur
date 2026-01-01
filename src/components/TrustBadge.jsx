function TrustBadge() {
    return (
        <footer className="mt-8 pb-4">
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

            {/* Copyright */}
            <p className="text-center text-xs text-gray-600 mt-4">
                MÜHÜR • Güvenli Dosya Şifreleme • Web Crypto API
            </p>
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

export default TrustBadge;
