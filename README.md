# 🔐 MÜHÜR - Güvenli Dosya Şifreleme

<div align="center">

![MÜHÜR Logo](https://img.shields.io/badge/MÜHÜR-Dosya_Şifreleme-00D4FF?style=for-the-badge&logo=lock&logoColor=white)

**Tamamen istemci taraflı, gizlilik odaklı dosya şifreleme uygulaması**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 🛡️ Özellikler

- **🔒 AES-GCM-256 Şifreleme** - Askeri düzeyde güvenlik standardı
- **🔑 PBKDF2 Anahtar Türetme** - 100.000 iterasyon ile güçlü parola koruması
- **🎲 Benzersiz IV ve Salt** - Her dosya için rastgele oluşturulan değerler
- **💻 %100 İstemci Taraflı** - Verileriniz asla sunucuya gönderilmez
- **🚫 Ağ İstekleri Yok** - Tamamen çevrimdışı çalışır
- **🎨 Modern Siber Güvenlik Tasarımı** - Koyu tema, neon efektler

## 🔐 Güvenlik Özellikleri

| Özellik | Detay |
|---------|-------|
| **Şifreleme Algoritması** | AES-GCM-256 |
| **Anahtar Türetme** | PBKDF2-SHA256 |
| **İterasyon Sayısı** | 100.000 |
| **IV Uzunluğu** | 12 byte (96 bit) |
| **Salt Uzunluğu** | 16 byte (128 bit) |

## 🚀 Kurulum

### Ön Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Yerel Geliştirme

```bash
# Repository'yi klonlayın
git clone https://github.com/efe-inan/muhur.git

# Proje dizinine gidin
cd muhur

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

### Production Build

```bash
npm run build
```

## 📖 Kullanım

### Dosya Şifreleme

1. **"Şifrele"** sekmesini seçin
2. Şifrelemek istediğiniz dosyayı sürükleyip bırakın veya tıklayarak seçin
3. Güçlü bir parola girin
4. **"Dosyayı Şifrele"** butonuna tıklayın
5. `.muhur` uzantılı şifrelenmiş dosyayı indirin

### Dosya Çözme

1. **"Çöz"** sekmesini seçin
2. `.muhur` uzantılı şifrelenmiş dosyayı yükleyin
3. Şifreleme sırasında kullandığınız parolayı girin
4. **"Dosyayı Çöz"** butonuna tıklayın
5. Orijinal dosyanızı indirin

## 🏗️ Teknoloji Stack

- **React 18** - UI framework
- **Vite** - Build tool ve dev server
- **TailwindCSS** - Utility-first CSS framework
- **Web Crypto API** - Yerleşik şifreleme API'si

## 🔒 Gizlilik Garantisi

MÜHÜR, gizliliğinizi en üst düzeyde korumak için tasarlanmıştır:

- ✅ Tüm şifreleme/çözme işlemleri tarayıcınızda gerçekleşir
- ✅ Hiçbir veri sunucuya gönderilmez
- ✅ Hiçbir telemetri veya analiz kodu bulunmaz
- ✅ Açık kaynak ve denetlenebilir
- ✅ Çevrimdışı kullanılabilir

## 📄 Dosya Formatı

Şifrelenmiş dosyalar aşağıdaki yapıyı içerir:

```
[SALT (16 byte)] + [IV (12 byte)] + [Şifrelenmiş Veri]
```

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen aşağıdaki adımları takip edin:

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## ⚠️ Uyarı

Bu uygulama eğitim amaçlıdır. Kritik verilerinizi şifrelemeden önce mutlaka yedek alın. Parolanızı kaybetmeniz durumunda verilerinizi kurtarmak mümkün değildir.

---

<div align="center">

**MÜHÜR ile dosyalarınız güvende! 🔐**

</div>
