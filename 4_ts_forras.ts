// 1.feladat

function osszesOszto(szam:number):number[]{
    let szamok:number[] = [];
    for(let i = 0; i <= szam; i++){
        if(szam % i === 0){
            szamok.push(i);
        }
    }
    return szamok;
}

// 2.feladat

function parosDarab(szamok:number[]):number{
    let db= 0;
        for(let i = 0; i < szamok.length; i++){
            if(szamok[i] % 2 === 0){
                db++;
            }
        }
    return db;
}

// 3. feladat
    
    function fuggvenyhivasPalindrom(palindromSzoveg:() => string):boolean{
        
        let szoveg:string = palindromSzoveg();
        szoveg = szoveg.replace(" ", "");
        let szovegHossz = szoveg.length;
        let eredmeny = true;
    
       for(let i = 0; i < szovegHossz; i++){
        if(szoveg[i] != szoveg[szovegHossz - 1 - i]){
            eredmeny = false;
        }

       }
        return eredmeny;
    }

    
    