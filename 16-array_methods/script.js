let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" "); //araya boşluk veya -vb ekleyebiliriz.

// eleman silme
// sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift();     // ilk eleman silinir. ve silinen eleman geri döndürülür.

// eleman ekleme
// sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena");   // diziznin başına eleman ekler

 let markalar1 = ["mazda","toyota"];
 let markalar2 = ["opel","renault"];
 let markalar3 = ["mercedes"];

 sonuc = markalar1.concat(markalar2, markalar3);
// sonuc = markalar1.splice(0, 1, "bmw","audi");
// sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(ogrenciler);