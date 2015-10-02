var url = "https://alumnoscurso.azure-mobile.net/tables/alumno/";

//function conget() {
//    //$.get hace llamadas ajax con get
//    $.get(url, function (res) {
//        var r = "";
//        for (var i = 0; i < res.length; i++) {
//            r += res[i].nombre + "br />";


//        }
//        $("#resultado").html(r);
//    });
//}

//seria igual
function procesarJson(res){
    var r = "";
    for (var i = 0; i < res.length; i++) {
        r += res[i].nombre + "br />";
    }
    $("#resultado").html(r);
}
function conget(e) {
    e.preventDefault();
    $.get(url.procesarJson);
}

function conGetJson(e) {
    e.preventDefault();
    var o = {
        nombre: "luis", apellido: "yp", edad: 22, nota:7};
}

function conpost(e) {
    e.preventDefault();
    var o = { nombre: "luis", apellido: "yp", edad: 22, nota: 7 };
    $.post(url, JSON.stringify(o), function(res) {
        console.log(res);
    });
}

function conload(e) {
    e.preventDefault();
    $("#resultado").load(url);
}
function conajax(e) {
    e.preventDefault();
    var o = { nombre: "luis", apellido: "yp", edad: 22, nota: 7 };
    $.ajax({
        type: "post",
        url: url,
        success: function(res) {
            console.log(res);

        },
        error: function(err) {
            console.log(err);
        },

        data: JSON.stringify(o),
        dataType: "json",
        headers: {
            "Content-Tyoe":"application/json"
}

});

}

$(document).ready(function() {
    $("#lnkajax").click(conajax);
    $("#lnkget").click(conget);
    $("#lnkpost").click(conpost);
    $("#lnkGetJson").click(conGetJson);
    $("#lnkload").click(conload);
});