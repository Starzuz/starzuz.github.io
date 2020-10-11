window.addEventListener("load", function () {
    var datos;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            console.log(datos)
        }
    };
    xmlhttp.open("GET", "data/data.json", true);
    xmlhttp.send();
    
    /*
    var datos = {
        "01":{
            "titulo":"Introduccion a la visualizacion de datos",
            "descripcion":"Introduccion",
            "imagen":"images/articulo_010.jpg",
            "url":"link",
            "fecha":"2020-01-01 00:00"
        },
        "02":{
            "titulo":"Data viz",
            "descripcion":"Introduccion",
            "imagen":"images/articulo_001.jpg",
            "url":"link",
            "fecha":"2020-01-01 00:00"
        }
    }*/
    console.log(datos);

    var div_contenido = document.getElementById("contenido_box");

    for(const articulo in datos){
        var titulo = datos[articulo]["titulo"];
        var imagen = datos[articulo]["imagen"];
        var url = datos[articulo]["url"];

        var div_articulo = document.createElement("div");
        div_articulo.classList.add("articulo");

        var div_articulo_a = document.createElement("a");
        div_articulo_a.classList.add("articulo_enlace");
        div_articulo_a.href = url;

        var div_articulo_imagen = document.createElement("img");
        div_articulo_imagen.classList.add("articulo_image");
        div_articulo_imagen.src = imagen;

        var div_articulo_titulo = document.createElement("div");
        div_articulo_titulo.classList.add("articulo_titulo");
        div_articulo_titulo.innerHTML = titulo;

        div_articulo_a.appendChild(div_articulo_imagen);
        div_articulo_a.appendChild(div_articulo_titulo);

        div_articulo.appendChild(div_articulo_a);

        div_contenido.appendChild(div_articulo);
    }
});