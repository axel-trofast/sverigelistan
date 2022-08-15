
//let egentid = 25.27;



//let medelp1 = 1;
//let medelp2 = 3;
//let medelp3 = 5;

//let mp = (medelp1 + medelp2 + medelp3) / 3;

//let medelt1 = 25.20;
//let medelt2 = 27.54;
//let medelt3 = 30.04;

//let mt = (medelt1 + medelt2 + medelt3) / 3;

//let kk = (75 + mp) / mt;

//let tb = mt - (mp / kk)

//let p = (egentid - tb) * kk;

function räkna() {
    let medelp1 = parseInt(document.querySelector("#poäng1").value);
    let medelp2 = parseInt(document.querySelector("#poäng2").value);
    let medelp3 = parseInt(document.querySelector("#poäng3").value);
    let egentid = parseInt(document.querySelector("#egent").value);
    let medelt1 = parseInt(document.querySelector("#tid1").value);
    let medelt2 = parseInt(document.querySelector("#tid2").value);
    let medelt3 = parseInt(document.querySelector("#tid3").value);

    let mp = (medelp1 + medelp2 + medelp3) / 3;
    let mt = (medelt1 + medelt2 + medelt3) / 3;

    let kk = (75 + mp) / mt;

    let tb = mt - (mp / kk);

    let p = (egentid - tb) * kk;

    p = p.toFixed(2);

    document.querySelector("#res").innerHTML = p;
}