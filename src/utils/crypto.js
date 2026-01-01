/**
 * MÜHÜR Cryptographic Utilities
 * 
 * Military-grade encryption using Web Crypto API
 * - AES-GCM-256 for authenticated encryption
 * - PBKDF2 with 150,000 iterations for key derivation
 * - Unique salt and IV per encryption operation
 */

const SALT_LENGTH = 16;  // 128 bits
const IV_LENGTH = 12;    // 96 bits (recommended for GCM)
const PBKDF2_ITERATIONS = 150000;
const KEY_LENGTH = 256;  // bits

/**
 * Generate a cryptographically secure random salt
 * @returns {Uint8Array} 16-byte salt
 */
export function generateSalt() {
    return crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
}

/**
 * Generate a cryptographically secure random IV
 * @returns {Uint8Array} 12-byte IV
 */
export function generateIV() {
    return crypto.getRandomValues(new Uint8Array(IV_LENGTH));
}

/**
 * Derive a 256-bit AES key from password using PBKDF2
 * @param {string} password - User's password
 * @param {Uint8Array} salt - Random salt
 * @returns {Promise<CryptoKey>} Derived AES-GCM key
 */
export async function deriveKey(password, salt) {
    // Convert password to bytes
    const encoder = new TextEncoder();
    const passwordBytes = encoder.encode(password);

    // Import password as raw key material
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        passwordBytes,
        'PBKDF2',
        false,
        ['deriveKey']
    );

    // Derive AES-GCM key using PBKDF2
    const derivedKey = await crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations: PBKDF2_ITERATIONS,
            hash: 'SHA-256'
        },
        keyMaterial,
        {
            name: 'AES-GCM',
            length: KEY_LENGTH
        },
        false,
        ['encrypt', 'decrypt']
    );

    return derivedKey;
}

/**
 * Encrypt a file with AES-GCM-256
 * @param {ArrayBuffer} fileData - File content as ArrayBuffer
 * @param {string} password - User's password
 * @param {function} onProgress - Progress callback (0-100)
 * @returns {Promise<{encryptedData: ArrayBuffer, originalName: string}>}
 */
export async function encryptFile(fileData, password, onProgress = () => { }) {
    onProgress(10);

    // Generate unique salt and IV for this encryption
    const salt = generateSalt();
    const iv = generateIV();

    onProgress(20);

    // Derive key from password
    const key = await deriveKey(password, salt);

    onProgress(40);

    // Encrypt the file data
    const encryptedContent = await crypto.subtle.encrypt(
        {
            name: 'AES-GCM',
            iv: iv
        },
        key,
        fileData
    );

    onProgress(80);

    // Pack: Salt (16) + IV (12) + Encrypted Data
    const result = new Uint8Array(SALT_LENGTH + IV_LENGTH + encryptedContent.byteLength);
    result.set(salt, 0);
    result.set(iv, SALT_LENGTH);
    result.set(new Uint8Array(encryptedContent), SALT_LENGTH + IV_LENGTH);

    onProgress(100);

    return result.buffer;
}

/**
 * Decrypt a file encrypted with encryptFile
 * @param {ArrayBuffer} encryptedData - The packed encrypted file
 * @param {string} password - User's password
 * @param {function} onProgress - Progress callback (0-100)
 * @returns {Promise<ArrayBuffer>} Original file content
 * @throws {Error} If password is wrong or data is corrupted
 */
export async function decryptFile(encryptedData, password, onProgress = () => { }) {
    onProgress(10);

    const data = new Uint8Array(encryptedData);

    // Validate minimum size
    if (data.length < SALT_LENGTH + IV_LENGTH + 16) { // 16 = minimum GCM auth tag
        throw new Error('Dosya çok kısa veya bozuk');
    }

    // Extract Salt and IV from header
    const salt = data.slice(0, SALT_LENGTH);
    const iv = data.slice(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
    const ciphertext = data.slice(SALT_LENGTH + IV_LENGTH);

    onProgress(20);

    // Derive key from password using extracted salt
    const key = await deriveKey(password, salt);

    onProgress(40);

    try {
        // Decrypt the content
        const decryptedContent = await crypto.subtle.decrypt(
            {
                name: 'AES-GCM',
                iv: iv
            },
            key,
            ciphertext
        );

        onProgress(100);

        return decryptedContent;
    } catch (error) {
        // GCM authentication failed - wrong password or corrupted data
        throw new Error('Şifre Yanlış veya Dosya Bozuk');
    }
}

/**
 * Convert ArrayBuffer to downloadable Blob
 * @param {ArrayBuffer} data 
 * @param {string} mimeType 
 * @returns {Blob}
 */
export function arrayBufferToBlob(data, mimeType = 'application/octet-stream') {
    return new Blob([data], { type: mimeType });
}

/**
 * Trigger file download
 * @param {Blob} blob 
 * @param {string} filename 
 */
export function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Read file as ArrayBuffer
 * @param {File} file 
 * @returns {Promise<ArrayBuffer>}
 */
export function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Dosya okunamadı'));
        reader.readAsArrayBuffer(file);
    });
}

/**
 * Format file size for display
 * @param {number} bytes 
 * @returns {string}
 */
export function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
