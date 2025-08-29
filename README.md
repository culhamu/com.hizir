# 🚘 Expertiz Yönetim Sistemi

Bu proje, araç ekspertiz süreçlerini dijitalleştirmek için geliştirilmiş **tam kapsamlı bir uygulamadır**.  
Kullanıcılar sisteme araç ekleyebilir, araçlara ait ekspertiz raporları oluşturabilir ve raporları görüntüleyebilir.  

---

## 📂 Proje Mimarisi

expertiz-projesi/
│── backend/ # Node.js + Express.js (API & İş mantığı)
│ ├── controllers/ # İş mantığı (Araç, Rapor, Kullanıcı)
│ ├── models/ # MongoDB modelleri
│ ├── routes/ # API rotaları
│ ├── middlewares/ # Auth, hata yakalama
│ ├── config/ # Veritabanı & JWT ayarları
│ ├── server.js # Uygulama başlangıç dosyası
│
│── frontend/ # React.js (Kullanıcı Arayüzü)
│ ├── src/
│ │ ├── components/ # Ortak bileşenler (Header, Layout vs.)
│ │ ├── pages/ # Sayfalar (Login, Dashboard, AddVehicle, AddReport)
│ │ ├── services/ # API servisleri (Axios)
│ │ ├── App.js # Router & Layout
│ │ └── index.js
│
│── README.md # Proje dökümantasyonu
│── package.json # Bağımlılıklar

---

## 🚀 Özellikler

- 🔐 Kullanıcı giriş & kayıt sistemi (JWT tabanlı)  
- 🚘 Araç ekleme ve listeleme  
- 📑 Ekspertiz raporu oluşturma ve rapor listesi  
- 📊 Dashboard üzerinden tüm kayıtları yönetme  
- 🎨 Modern ve responsive frontend (React + TailwindCSS)  

