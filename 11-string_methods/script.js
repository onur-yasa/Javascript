let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc=kursAdi.toLowerCase();
sonuc=kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6); //aralık belirterek istediğimiz kısmı yaptık.
sonuc = kursAdi.slice(10);   // 10. cu indisten başla sonuna kadar al.
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6); //slice ile aynı iş.
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu"); //Eğitim, yerine Kursu olarak değiştir.
sonuc = kursAdi.trim();                     //Boşluk karekterleri siler
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");   //indis numarası verir.
sonuc = kursAdi.split(" ");             //cümleyi tek te ayırır.orn 'Komple' 'Uygulamalı'
sonuc = kursAdi.split(" ")[0];           //cümlenin birinci elemanıı alır. Komple
sonuc = kursAdi.split(" ")[3];           //3. elemanı alır. Geliştirme


console.log(sonuc);