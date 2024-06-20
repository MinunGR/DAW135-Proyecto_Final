document.addEventListener('DOMContentLoaded', function () {
    // Añadimos scroll por secciones
    document.getElementById('inicio').addEventListener('click', function () {
        scrollToSection('sec_inicio', -100);
    });

    document.getElementById('nosotros').addEventListener('click', function () {
        scrollToSection('sec_nosotros', -100);
    });

    document.getElementById('clientes').addEventListener('click', function () {
        scrollToSection('sec_clientes', -130);
    });

    document.getElementById('equipo').addEventListener('click', function () {
        scrollToSection('sec_equipo', -100);
    });

    document.getElementById('contactos').addEventListener('click', function () {
        scrollToSection('sec_contactos', -100);
    });

});

// Función para hacer scroll a una sección
function scrollToSection(sectionId, offset) {
    const section = document.getElementById(sectionId);
    const top = section.offsetTop + offset;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}