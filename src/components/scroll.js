
//Añadimos scroll por secciones
$("#inicio").click(function () {
    $('html, body').animate({
        scrollTop: $("#sec_inicio").offset().top - 100
    }, 1000);
});
$("#nosotros").click(function () {
    $('html, body').animate({
        scrollTop: $("#sec_nosotros").offset().top - 100
    }, 1000);
});
$("#clientes").click(function () {
    $('html, body').animate({
        scrollTop: $("#sec_clientes").offset().top - 130
    }, 1000);
});
$("#equipo").click(function () {
    $('html, body').animate({
        scrollTop: $("#sec_equipo").offset().top - 130
    }, 1000);
});
$("#contactos").click(function () {
    $('html, body').animate({
        scrollTop: $("#sec_contactos").offset().top - 100
    }, 1000);
});
