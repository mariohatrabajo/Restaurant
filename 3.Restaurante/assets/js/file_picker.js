// Al clickar el boton del CV, se simula el click en un input type file invisible
document.getElementById('btn_cv').addEventListener('click', function () {
    document.getElementById('real_cv').click();
});