var n = parseInt(prompt('inserisci n: '));
var work = 1;
var i = 0;
var vett = [];

for(i=0; i<n; i++){
    vett.push(work);
    console.log('valori nel vettore: ' + vett[i]);
    work++;
}

work = 0;

for(i=0; i<n; i++){
    work = vett[i]*vett[i]*vett[i];
    console.log('cubi: ' + work);
}
