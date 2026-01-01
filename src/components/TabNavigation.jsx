function TabNavigation({ activeTab, onTabChange }) {
    return (
        <div className="flex mb-6 bg-cyber-dark/50 rounded-xl p-1.5 border border-gray-800">
            <TabButton
                active={activeTab === 'encrypt'}
                onClick={() => onTabChange('encrypt')}
            >
                <LockIcon className="w-5 h-5" />
                <span>KİLİTLE</span>
            </TabButton>
            <TabButton
                active={activeTab === 'decrypt'}
                onClick={() => onTabChange('decrypt')}
            >
                <UnlockIcon className="w-5 h-5" />
                <span>AÇ</span>
            </TabButton>
        </div>
    );
}

function TabButton({ active, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`
        flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg
        font-semibold transition-all duration-300 font-mono-display
        ${active
                    ? 'bg-cyber-accent text-cyber-dark shadow-lg shadow-cyber-accent/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }
      `}
        >
            {children}
        </button>
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

export default TabNavigation;
