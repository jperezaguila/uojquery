var url = "https://alumnoscurso.azure-mobile.net/tables/curso/";



$(document).ready(function() {
    $("#capa2").hide();
    $.get(url, procesarJson);
    $("#btnrecarga").click(recargar);
    $("#btnnew").click(nuevo);

});

function listar(e) {
    e.preventDefault();
    $.get(url.procesarJson);
}


function procesarJson(res) {
        var r = "";
        for (var i = 0; i < res.length; i++) {
            r += res[i].nombre + "  " +res[i].duracion + "<br />";
           
        }
        $("#capa1").html(r);
    }

function nuevo() {
    $("#capa2").show();
//    e.preventDefault();
    
}

//    
//    var o = getElementById.txt

//    $.post(url, JSON.stringify(o), function(res) {
//        console.log(res);
//    }

function recargar(e) {
    e.preventDefault();
    $("capa1").load(url);

}