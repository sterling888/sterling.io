function ordena(){
    'codigo para capturar el valor'
    var a =parseInt(document.getElementById("txtUno").value);
    var b =parseInt(document.getElementById("txtDos").value);
    var c =parseInt(document.getElementById("txtTres").value);

    var mayor,medio,menor;

    if(a>b && a > c){
        mayor= a
        if (b>=c){
            medio=b;
            menor=c;
        }else{
            medio=c;
            menor=b;
        }
    }else if(b>a && b > c){
        mayor= b
        if (a>=c){
            medio=a;
            menor=c;
        }else{
            medio=c;
            menor=a;
        }
    }else if(c>a && c>b){
        mayor= c
        if (a>=b){
            medio=a;
            menor=b;
        }else{
            medio=b;
            menor=a;
        }
    }

    'codigo para mostrar'
    document.getElementById("txtMayor").value = mayor;
    document.getElementById("txtMedio").value = medio;
    document.getElementById("txtMenor").value = menor;
}