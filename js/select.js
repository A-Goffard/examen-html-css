
// Select que envía a la dirección del parque seleccionado

const selectElement = document.getElementById('select');

    if(selectElement) {
        selectElement.addEventListener ('change', function() {

        const selectedValue = this.value;

        if(selectedValue == "value1"){
            window.location.href = "/parques/Akarlanda.html";
        }
        if(selectedValue == "value2"){
            window.location.href = "/parques/Aranguren.html";
        }
        if(selectedValue == "value3"){
            window.location.href = "/parques/Gorliz.html";
        }
        if(selectedValue == "value4"){
            window.location.href = "/parques/Bolunburu.html";
        }
        if(selectedValue == "value5"){
            window.location.href = "/parques/Kolitza.html";
        }
        if(selectedValue == "value6"){
            window.location.href = "/parques/El-Calero.html";
        }
        if(selectedValue == "value7"){
            window.location.href = "/parques/Basinagre.html";
        }
        if(selectedValue == "value8"){
            window.location.href = "/parques/El-Cerrillo.html";
        }
        if(selectedValue == "value9"){
            window.location.href = "/parques/Fuente-de-la-Choza.html";
        }
        if(selectedValue == "value10"){
            window.location.href = "/parques/Zumeltza.html";
        }
        if(selectedValue == "value11"){
            window.location.href = "/parques/Landederra.html";
        }
        if(selectedValue == "value12"){
            window.location.href = "/parques/Pozalagua.html";
        }



        });
    
    }else{
        console.log('Errooooor');
    }
