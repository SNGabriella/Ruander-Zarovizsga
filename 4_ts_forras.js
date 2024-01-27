// 1.feladat
function osszesOszto(szam) {
    var szamok = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i === 0) {
            szamok.push(i);
        }
    }
    return szamok;
}
// 2.feladat
function parosDarab(szamok) {
    var db = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}
// 3. feladat
function fuggvenyhivasPalindrom(palindromSzoveg) {
    var szoveg = palindromSzoveg();
    szoveg = szoveg.replace(" ", "");
    var szovegHossz = szoveg.length;
    var eredmeny = true;
    for (var i = 0; i < szovegHossz; i++) {
        if (szoveg[i] != szoveg[szovegHossz - 1 - i]) {
            eredmeny = false;
        }
    }
    return eredmeny;
}
