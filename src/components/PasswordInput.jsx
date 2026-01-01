import { useState } from 'react';

function PasswordInput({ value, onChange, placeholder = "Şifre girin...", disabled = false }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const getPasswordStrength = () => {
        if (!value) return { level: 0, text: '', color: '' };

        let strength = 0;
        if (value.length >= 8) strength++;
        if (value.length >= 12) strength++;
        if (/[A-Z]/.test(value)) strength++;
        if (/[a-z]/.test(value)) strength++;
        if (/[0-9]/.test(value)) strength++;
        if (/[^A-Za-z0-9]/.test(value)) strength++;

        if (strength <= 2) return { level: 1, text: 'Zayıf', color: 'bg-red-500' };
        if (strength <= 4) return { level: 2, text: 'Orta', color: 'bg-yellow-500' };
        return { level: 3, text: 'Güçlü', color: 'bg-cyber-accent' };
    };

    const strength = getPasswordStrength();

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-400 mb-1">
                Şifre
            </label>

            <div className={`
        relative rounded-xl transition-all duration-300
        ${isFocused ? 'ring-2 ring-cyber-accent/50' : ''}
      `}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`
            w-full px-4 py-4 pr-12 rounded-xl
            bg-cyber-dark border border-gray-700
            text-white placeholder-gray-500
            font-mono text-base
            transition-all duration-300
            focus:border-cyber-accent focus:bg-cyber-dark/80
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
                />

                {/* Toggle visibility button */}
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={disabled}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white transition-colors disabled:cursor-not-allowed"
                    aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                >
                    {showPassword ? (
                        <EyeOffIcon className="w-5 h-5" />
                    ) : (
                        <EyeIcon className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Password strength indicator */}
            {value && (
                <div className="flex items-center gap-2 animate-fade-in">
                    <div className="flex-1 flex gap-1">
                        {[1, 2, 3].map((level) => (
                            <div
                                key={level}
                                className={`
                  h-1 flex-1 rounded-full transition-all duration-300
                  ${level <= strength.level ? strength.color : 'bg-gray-700'}
                `}
                            />
                        ))}
                    </div>
                    <span className={`
            text-xs font-medium
            ${strength.level === 1 ? 'text-red-400' :
                            strength.level === 2 ? 'text-yellow-400' : 'text-cyber-accent'}
          `}>
                        {strength.text}
                    </span>
                </div>
            )}
        </div>
    );
}

function EyeIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function EyeOffIcon({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
    );
}

export default PasswordInput;
