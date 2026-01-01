function ProgressBar({ progress }) {
    return (
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-cyber-accent to-cyber-accent-dim rounded-full transition-all duration-300 ease-out progress-shimmer"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
        </div>
    );
}

export default ProgressBar;
