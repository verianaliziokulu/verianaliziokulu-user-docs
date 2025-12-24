---
sidebar_position: 2
---

# Genel Durum (Ana Sayfa)

Bu sayfa, Veri Analizi Okulu platformuna giriş yaptıktan sonra katılımcıların ilk karşılaştığı ana paneldir.  
Katılımcılar burada **öğrenci durumlarını**, **devam/mazeret haklarını** ve **ders bazlı katılım bilgilerini** görüntüleyebilirler.

## Ana Panel Genel Görünüm

Katılımcı sisteme giriş yaptıktan sonra aşağıdaki bilgileri içeren ana panel ile karşılaşır:

![Genel Durum Ana Panel](/img/dashboard/dashboard1.png)

### Bu ekranda yer alan bilgiler:

| Alan                  | Açıklama                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| **Öğrenci Bilgileri** | Öğrenci numarası ve aktif öğrenci durumu                                                         |
| **Kayıtlı Program**   | Katılımcının kayıtlı olduğu ana program ve yan dal bilgisi                                       |
| **Devam Durumu**      | Toplam mazeret ve devamsızlık hakkının doluluk oranları                                          |
| **Uyarılar**          | Devamsızlık sınırına yaklaşılması durumunda sistem tarafından gösterilen bilgilendirme mesajları |
| **Telegram Kanalı**   | Resmî duyuru kanalına hızlı erişim                                                               |
| **Çıkış**             | Sağ üst köşeden güvenli çıkış işlemi                                                             |

> ⚠️ **Uyarı mesajları**, katılımcının derslere katılım durumuna göre otomatik olarak oluşturulur.

## Devam & Mazeret Bilgileri

Ana panelin sağ kısmında, katılımcının devam durumu özetlenir:

- **Mazeret Hakkı**: Toplam mazeret hakkı ve kullanılan/kalan miktar
- **Devamsızlık Hakkı**: Katılımcının şu ana kadar yaptığı devamsızlık sayısı
- **Durum Çubuğu**: Hakların doluluk oranını görsel olarak ifade eder

Bu alan sayesinde katılımcılar, programdan çıkarılma riski oluşmadan önce durumlarını net şekilde takip edebilirler.

### Devamsızlık Takip Sistemi Nasıl Çalışır?

Veri Analizi Okulu platformu, katılımcıların devam durumunu otomatik olarak izler ve kaydeder. Sistem aşağıdaki şekilde çalışır:

#### 1. Otomatik Yoklama Kaydı

- Her ders için yoklama, eğitmenler tarafından sisteme işlenir
- Katılım durumu gerçek zamanlı olarak güncellenir
- Sisteme işlenen veriler anında katılımcının profiline yansır

#### 2. Devamsızlık Türleri

Platform üç farklı devamsızlık türünü ayırt eder:

| Durum | Açıklama | Etkisi |
|-------|----------|--------|
| **Katılmadı** | Herhangi bir bildirimde bulunmadan derse katılmama | Devamsızlık hakkından düşer |
| **Mazeret** | Geçerli bir mazerete dayalı katılmama (hastalık, iş vb.) | Mazeret hakkından düşer |
| **Katılım Zorunluluğu Yok** | Opsiyonel ders veya özel durumlar | Hiçbir haktan düşmez |

#### 3. Mazeret Bildirimi Süreci

Katılımcılar mazeret bildirmek için:

1. Ders saatinden **önce** veya **en geç ders bitiminden 24 saat içinde** mazeret bildirimi yapmalıdır
2. Mazeret bildirimi sistem üzerinden veya belirtilen iletişim kanalları aracılığıyla yapılabilir
3. Geçerli kabul edilen mazeretler:
   - Sağlık sorunları (raporlu veya raporsuz)
   - İş/kariyer gereklilikleri
   - Acil aile durumları
   - Teknik sorunlar (internet kesintisi, elektrik kesintisi vb.)

:::note Önemli
Mazeret bildirimi yapmadan derse katılmamak, doğrudan **devamsızlık** olarak kaydedilir ve devamsızlık hakkından düşer.
:::

#### 4. Hak Kullanım Limitleri

Her katılımcı için belirlenen limitler:

- **Toplam Mazeret Hakkı**: Programın süresi ve yoğunluğuna göre belirlenir (genellikle 3-5 ders)
- **Toplam Devamsızlık Hakkı**: Mazeret dışı devamsızlık limiti (genellikle 2-3 ders)
- Bu haklar **kümülatiftir** - tüm program boyunca toplam kullanım sayısını gösterir

#### 5. Katılım Durumu Hesaplama

Sistem, katılımcının durumunu şu şekilde hesaplar:

```
Toplam Derste Olması Gereken Ders Sayısı = Tüm Zorunlu Dersler
Gerçekleşen Katılım = Katıldığı Dersler + Mazeretli Dersler
Devamsızlık = Katılmadığı Dersler (mazeret bildirmeden)
```

#### 6. Görsel Durum Göstergeleri

Ana paneldeki durum çubukları şu renk kodlarını kullanır:

- 🟢 **Yeşil**: Güvenli alan (%0-50 kullanım)
- 🟡 **Sarı**: Dikkat bölgesi (%50-80 kullanım)
- 🔴 **Kırmızı**: Kritik seviye (%80-100 kullanım)

#### 7. Otomatik Uyarı Sistemi

Sistem aşağıdaki durumlarda otomatik uyarı üretir:

- Mazeret hakkının %75'ine ulaşıldığında
- Devamsızlık hakkının %75'ine ulaşıldığında
- Toplam hak kullanımı %90'ı geçtiğinde
- Haklar tükendiğinde (kritik durum)

:::warning Kritik Durum
Hem mazeret hem devamsızlık hakları tükendiğinde, bir sonraki derse katılmama durumunda **programdan çıkarılma süreci başlar**.
:::

#### 8. Veri Güncelleme Sıklığı

- Yoklama verileri her ders sonrası **24 saat içinde** sisteme işlenir
- Bazı durumlarda veri girişi birkaç gün sürebilir
- "Katılım Bilgisi Yok" durumu, verinin henüz işlenmediğini gösterir
- Katılımcılar, belirsiz durumlar için eğitmenlerine veya yöneticilere danışabilir

## Derslerim Bölümü (Detaylı Görünüm)

Ana sayfada aşağı doğru kaydırıldığında (**scroll down**), katılımcılar geçmiş haftalara ait ders ve katılım detaylarını görebilirler.

![Derslerim Detay](/img/dashboard/dashboard2.png)

### Derslerim alanında sunulan özellikler:

#### Filtre & Özet Bilgiler

Üst kısımda, katılım durumlarına göre hızlı özet chip’leri yer alır:

| Chip              | Anlamı                                 |
| ----------------- | -------------------------------------- |
| **Katıldı**       | Derse katılım sağlandı                 |
| **Katılmadı**     | Derse katılım sağlanmadı               |
| **Bilgi Yok**     | Katılım verisi henüz sisteme işlenmedi |
| **Zorunlu Değil** | Katılım zorunluluğu olmayan ders       |

Katılımcılar ayrıca:

- Ders adına göre arama yapabilir
- Program / modül bazlı filtreleme uygulayabilir

#### Ders Listesi

Her ders satırında aşağıdaki bilgiler yer alır:

| Alan             | Açıklama                              |
| ---------------- | ------------------------------------- |
| **Kurs & Ders**  | Ders adı ve bağlı olduğu kurs         |
| **Durum**        | Katılım bilgisi (chip ile gösterilir) |
| **Tarih & Saat** | Dersin gerçekleştiği tarih ve saat    |
| **İşlemler**     | Gerekli durumlarda _İtiraz Et_ butonu |

### Katılım Durumu Chip’leri

Derslerin katılım durumları renkli chip’ler ile ifade edilir:

- 🟢 **Katıldı**
- 🔴 **Katılmadı**
- ⚪ **Katılım Bilgisi Yok**
- 🔵 **Katılım Zorunluluğu Yok**

Bu yapı sayesinde katılımcılar, **hangi derse neden devamsız yazıldığını** net biçimde ayırt edebilirler.

## İpuçları

:::tip Takip Önerisi

- Devam durumunuzu düzenli kontrol edin
- Uyarı mesajlarını dikkate alın
- Katılım bilgilerinde hata olduğunu düşünüyorsanız ilgili ders için **itiraz** oluşturun
- Derslere zamanında katılım sağlayarak hak kaybı yaşamaktan kaçının

:::
