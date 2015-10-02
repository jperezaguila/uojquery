
//funcion para ocultar div cada vez que damos un click, buscame todos los divs, u los oculta.
function ocultardivs() {
    //en este atributo html podemos cambiar el codigo html para todos los divs.
    $("div").html("empieza el mareo");
    $("div").hide(2000,mostrardiv);

}

function mostrardiv() {
    $("div").show(3000,ocultardivs);

}
//evento que se ejecuta una vez, cuando este cargado el documento. Con Jquery $(document) 
//$(document).ready(function() {
//    $("div").click(ocultardivs);
//});

//evento que se ejecuta una vez, cuando este cargado el documento. Con Jquery $(document) y con todos los div #uno 
$(document).ready(function() {
    alert("He cargado");
    $("#uno").click(ocultardivs);

// en este apartado al boton le decimos que muestre los divs
    $("button[type=button]").click(
        function() {
            $("div").show();
            //prevent default se consigue que el link no vuelva a cargar toda la pagina.
            $("a").click(
                function(e) {
                    e.preventDefault();
                    e.log($(this));
                    console.log(e);
                    e.preventDefault();
                }
            );
        }
    );

});

