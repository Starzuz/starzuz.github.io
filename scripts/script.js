window.addEventListener("load", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);
            console.log(datos)
        }
    };
    xmlhttp.open("GET", "data/data.json", true);
    xmlhttp.send();
});